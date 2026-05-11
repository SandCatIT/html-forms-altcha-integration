<?php

/**
 * Fired during plugin activation
 *
 * @link       https://www.sandcat.lv
 * @since      1.0.0
 *
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/includes
 */

/**
 * Fired during plugin activation.
 *
 * @since      1.0.0
 * @package    Html_Forms_Altcha_Integration
 * @subpackage Html_Forms_Altcha_Integration/includes
 * @author     Sandcat IT <info@sandcat.lv>
 */
class Html_Forms_Altcha_Integration_Activator {

	/**
	 * Generate and persist HMAC secrets when missing (first activation only).
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		require_once __DIR__ . '/html-forms-altcha-options.php';

		$sig = get_option(HTML_FORMS_ALTCHA_OPTION_HMAC_SIGNATURE_SECRET, '');
		if (! is_string($sig) || $sig === '') {
			update_option(
				HTML_FORMS_ALTCHA_OPTION_HMAC_SIGNATURE_SECRET,
				bin2hex(random_bytes(32)),
				false
			);
		}

		$key_sig = get_option(HTML_FORMS_ALTCHA_OPTION_HMAC_KEY_SIGNATURE_SECRET, '');
		if (! is_string($key_sig) || $key_sig === '') {
			update_option(
				HTML_FORMS_ALTCHA_OPTION_HMAC_KEY_SIGNATURE_SECRET,
				bin2hex(random_bytes(32)),
				false
			);
		}
	}

}
