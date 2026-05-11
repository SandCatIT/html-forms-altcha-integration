<?php

/**
 * Option keys and REST identifiers shared across the plugin.
 *
 * @package Html_Forms_Altcha_Integration
 */

if (! defined('ABSPATH')) {
	exit;
}

if (! defined('HTML_FORMS_ALTCHA_OPTION_HMAC_SIGNATURE_SECRET')) {
	define('HTML_FORMS_ALTCHA_OPTION_HMAC_SIGNATURE_SECRET', 'html_forms_altcha_hmac_signature_secret');
}

if (! defined('HTML_FORMS_ALTCHA_OPTION_HMAC_KEY_SIGNATURE_SECRET')) {
	define('HTML_FORMS_ALTCHA_OPTION_HMAC_KEY_SIGNATURE_SECRET', 'html_forms_altcha_hmac_key_signature_secret');
}

if (! defined('HTML_FORMS_ALTCHA_REST_NAMESPACE')) {
	define('HTML_FORMS_ALTCHA_REST_NAMESPACE', 'html-forms-altcha/v1');
}

if (! defined('HTML_FORMS_ALTCHA_REST_ROUTE_CHALLENGE')) {
	define('HTML_FORMS_ALTCHA_REST_ROUTE_CHALLENGE', '/challenge');
}
