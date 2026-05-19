<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://www.sandcat.lv
 * @since      1.0.0
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/public
 */

/**
 * Enqueues the Vite-built ALTCHA v3 web component script.
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/public
 */
class Html_Forms_Altcha_Integration_Public {

	const WIDGET_SCRIPT_HANDLE = 'html-forms-altcha-widget';

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version
	 */
	private $version;

	/**
	 * True when main query post content contains the optional [html_forms_altcha] shortcode.
	 *
	 * @var bool
	 */
	private $shortcode_in_main_post = false;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param string $plugin_name The name of this plugin.
	 * @param string $version     The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version     = $version;

	}

	/**
	 * Detect optional shortcode so we can still enqueue when the global filter is off.
	 *
	 * @param array<int, \WP_Post> $posts Posts loaded for the query.
	 * @param \WP_Query|null       $query Query instance.
	 * @return array<int, \WP_Post>
	 */
	public function detect_shortcode_in_main_posts( $posts, $query ) {
		if ( ! $query instanceof \WP_Query || ! $query->is_main_query() || empty( $posts ) ) {
			return $posts;
		}

		foreach ( $posts as $post ) {
			if ( ! isset( $post->post_content ) || ! is_string( $post->post_content ) ) {
				continue;
			}
			if ( has_shortcode( $post->post_content, 'html_forms_altcha' ) ) {
				$this->shortcode_in_main_post = true;
				break;
			}
		}

		return $posts;
	}

	/**
	 * Register and enqueue ALTCHA as an ES module in the footer.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_widget_script() {

		if ( is_admin() ) {
			return;
		}

		$load_by_default = apply_filters( 'html_forms_altcha_enqueue_widget_script', true );
		if ( ! $load_by_default && ! $this->shortcode_in_main_post ) {
			return;
		}

		$rel_path = 'assets/js/altcha-widget.js';
		$path     = HTML_FORMS_ALTCHA_PLUGIN_DIR . $rel_path;

		if ( ! is_readable( $path ) ) {
			if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
				// phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
				error_log( 'HTML Forms Altcha: missing built file ' . $path . '. Run pnpm install && pnpm run build in the plugin directory.' );
			}
			return;
		}

		$url = plugins_url( $rel_path, HTML_FORMS_ALTCHA_PLUGIN_FILE );

		wp_register_script(
			self::WIDGET_SCRIPT_HANDLE,
			$url,
			array(),
			(string) filemtime( $path ),
			array(
				'in_footer' => true,
				'strategy'  => 'async',
			)
		);

		wp_enqueue_script( self::WIDGET_SCRIPT_HANDLE );
	}

	/**
	 * Load `<altcha-widget>` as a module script.
	 *
	 * @param string $tag    Script tag HTML.
	 * @param string $handle Script handle.
	 * @param string $src    Script source URL.
	 * @return string
	 */
	public function set_widget_script_type_module( $tag, $handle, $src ) {

		if ( self::WIDGET_SCRIPT_HANDLE !== $handle ) {
			return $tag;
		}

		return str_replace( ' src=', ' type="module" src=', $tag );
	}

}
