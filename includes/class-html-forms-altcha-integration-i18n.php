<?php

/**
 * Define the internationalization functionality
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @link       https://www.sandcat.lv
 * @since      1.0.0
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/includes
 */

/**
 * Define the internationalization functionality.
 *
 * Loads and defines the internationalization files for this plugin
 * so that it is ready for translation.
 *
 * @since      1.0.0
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/includes
 * @author     Sandcat IT <info@sandcat.lv>
 */
class Html_Forms_Altcha_Integration_i18n {


	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'html-forms-altcha-integration',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}



}
