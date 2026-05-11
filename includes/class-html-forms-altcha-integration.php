<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://www.sandcat.lv
 * @since      1.0.0
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/includes
 * @author     Sandcat IT <info@sandcat.lv>
 */
class Html_Forms_Altcha_Integration {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Html_Forms_Altcha_Integration_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * REST + HTML Forms validation.
	 *
	 * @since    1.0.0
	 * @var      Html_Forms_Altcha_Integration_Forms
	 */
	protected $forms_integration;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'HTML_FORMS_ALTCHA_INTEGRATION_VERSION' ) ) {
			$this->version = HTML_FORMS_ALTCHA_INTEGRATION_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'html-forms-altcha-integration';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Html_Forms_Altcha_Integration_Loader. Orchestrates the hooks of the plugin.
	 * - Html_Forms_Altcha_Integration_i18n. Defines internationalization functionality.
	 * - Html_Forms_Altcha_Integration_Admin. Defines all hooks for the admin area.
	 * - Html_Forms_Altcha_Integration_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/html-forms-altcha-options.php';

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-html-forms-altcha-integration-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-html-forms-altcha-integration-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-html-forms-altcha-integration-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-html-forms-altcha-integration-public.php';

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-html-forms-altcha-service.php';

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-html-forms-altcha-integration-forms.php';

		$this->loader = new Html_Forms_Altcha_Integration_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Html_Forms_Altcha_Integration_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Html_Forms_Altcha_Integration_i18n();

		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Html_Forms_Altcha_Integration_Admin( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_scripts' );
		$this->loader->add_action( 'admin_notices', $plugin_admin, 'maybe_html_forms_missing_notice' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Html_Forms_Altcha_Integration_Public( $this->get_plugin_name(), $this->get_version() );

		$this->loader->add_filter( 'the_posts', $plugin_public, 'detect_shortcode_in_main_posts', 10, 2 );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_widget_script' );
		$this->loader->add_filter( 'script_loader_tag', $plugin_public, 'set_widget_script_type_module', 10, 3 );

		$this->forms_integration = new Html_Forms_Altcha_Integration_Forms();
		$this->loader->add_action( 'rest_api_init', $this->forms_integration, 'register_rest_routes' );
		$this->loader->add_action( 'plugins_loaded', $this, 'register_hf_altcha_validation', 20 );

	}

	/**
	 * Register hf_validate_form after HTML Forms (and other plugins) have loaded.
	 *
	 * @since 1.0.0
	 */
	public function register_hf_altcha_validation() {
		if ( ! Html_Forms_Altcha_Integration_Forms::is_html_forms_active() ) {
			return;
		}

		add_filter( 'hf_validate_form', array( $this->forms_integration, 'filter_hf_validate_form' ), 10, 3 );
	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Html_Forms_Altcha_Integration_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
