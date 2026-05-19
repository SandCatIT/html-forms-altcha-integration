<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://www.sandcat.lv
 * @since             1.0.0
 * @package           Html_Forms_Altcha_Integration
 *
 * @wordpress-plugin
 * Plugin Name:       HTML forms Altcha integration
 * Plugin URI:        https://www.sandcat.lv
 * Description:       Integrate altcha V2 to your HTML forms plugin seamlessly.
 * Version:           1.0.0
 * Author:            Sandcat IT
 * Author URI:        https://www.sandcat.lv/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       html-forms-altcha-integration
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (! defined('WPINC')) {
	die;
}

define('HTML_FORMS_ALTCHA_PLUGIN_FILE', __FILE__);
define('HTML_FORMS_ALTCHA_PLUGIN_DIR', plugin_dir_path(__FILE__));

// Load Composer autoloader.
if (is_readable(__DIR__ . '/vendor/autoload.php')) {
	require __DIR__ . '/vendor/autoload.php';
}

/**
 * Currently plugin version.
 * Start at version 1.0.0 and use SemVer - https://semver.org
 * Rename this for your plugin and update it as you release new versions.
 */
define('HTML_FORMS_ALTCHA_INTEGRATION_VERSION', '1.0.2');

/**
 * REST URL for the ALTCHA widget `challenge` attribute.
 *
 * @return string
 */
function html_forms_altcha_get_challenge_url()
{
	require_once plugin_dir_path(__FILE__) . 'includes/html-forms-altcha-options.php';

	return rest_url(HTML_FORMS_ALTCHA_REST_NAMESPACE . HTML_FORMS_ALTCHA_REST_ROUTE_CHALLENGE);
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-html-forms-altcha-integration-activator.php
 */
function activate_html_forms_altcha_integration()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-html-forms-altcha-integration-activator.php';
	Html_Forms_Altcha_Integration_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-html-forms-altcha-integration-deactivator.php
 */
function deactivate_html_forms_altcha_integration()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-html-forms-altcha-integration-deactivator.php';
	Html_Forms_Altcha_Integration_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_html_forms_altcha_integration');
register_deactivation_hook(__FILE__, 'deactivate_html_forms_altcha_integration');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-html-forms-altcha-integration.php';

add_shortcode( 'html_forms_altcha', '__return_empty_string' );

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_html_forms_altcha_integration()
{

	$plugin = new Html_Forms_Altcha_Integration();
	$plugin->run();
}
run_html_forms_altcha_integration();
