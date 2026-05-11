<?php

/**
 * The admin-specific functionality of the plugin.
 *
 * @link       https://www.sandcat.lv
 * @since      1.0.0
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/admin
 * @author     Sandcat IT <info@sandcat.lv>
 */
class Html_Forms_Altcha_Integration_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string    $plugin_name       The name of this plugin.
	 * @param      string    $version    The version of this plugin.
	 */
	public function __construct( $plugin_name, $version ) {

		$this->plugin_name = $plugin_name;
		$this->version = $version;

	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Html_Forms_Altcha_Integration_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Html_Forms_Altcha_Integration_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/html-forms-altcha-integration-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in Html_Forms_Altcha_Integration_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The Html_Forms_Altcha_Integration_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/html-forms-altcha-integration-admin.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Warn if HTML Forms is not active (validation hooks will not run).
	 *
	 * @since    1.0.0
	 */
	public function maybe_html_forms_missing_notice() {

		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( Html_Forms_Altcha_Integration_Forms::is_html_forms_active() ) {
			return;
		}

		echo '<div class="notice notice-warning is-dismissible"><p>';
		esc_html_e( 'HTML Forms Altcha integration needs the HTML Forms plugin active for form validation. The challenge endpoint still works for manual testing.', 'html-forms-altcha-integration' );
		echo '</p></div>';

	}

}
