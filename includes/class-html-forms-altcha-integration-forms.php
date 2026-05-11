<?php

/**
 * REST challenge endpoint and HTML Forms validation.
 *
 * @package Html_Forms_Altcha_Integration
 */

/**
 * ALTCHA REST API + hf_validate_form integration.
 */
class Html_Forms_Altcha_Integration_Forms
{

	/**
	 * Whether HTML Forms is available (Form class).
	 */
	public static function is_html_forms_active(): bool
	{
		return class_exists('HTML_Forms\Form');
	}

	/**
	 * Register REST routes.
	 */
	public function register_rest_routes(): void
	{
		register_rest_route(
			HTML_FORMS_ALTCHA_REST_NAMESPACE,
			HTML_FORMS_ALTCHA_REST_ROUTE_CHALLENGE,
			array(
				'methods' => \WP_REST_Server::READABLE,
				'callback' => array($this, 'rest_serve_challenge'),
				'permission_callback' => '__return_true',
			)
		);
	}

	/**
	 * @return \WP_REST_Response|\WP_Error
	 */
	public function rest_serve_challenge(\WP_REST_Request $request)
	{
		$payload = Html_Forms_Altcha_Service::create_challenge_array();

		if ($payload === null) {
			return new \WP_Error(
				'altcha_unconfigured',
				__('ALTCHA is not configured.', 'html-forms-altcha-integration'),
				array('status' => 503)
			);
		}

		$response = rest_ensure_response($payload);
		if ($response instanceof \WP_REST_Response) {
			$response->header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
		}

		return $response;
	}

	/**
	 * @param string               $error Error code or empty string.
	 * @param \HTML_Forms\Form     $form Form instance.
	 * @param array<string, mixed> $data Submitted values.
	 *
	 * @return string
	 */
	public function filter_hf_validate_form($error, $form, $data)
	{
		if ($error !== '') {
			return $error;
		}

		// $enabled = apply_filters('html_forms_altcha_enabled_for_form', false, $form, $data);
		// if (! $enabled) {
		// 	return $error;
		// }

		if (! empty($data['sc_text'])) {
			return 'invalid_captcha';
		}

		$altcha_val = isset($data['altcha']) && is_string($data['altcha']) ? $data['altcha'] : '';
		if ($altcha_val === '') {
			return 'invalid_captcha';
		}

		if (! Html_Forms_Altcha_Service::verify_payload_string($altcha_val)) {
			return 'invalid_captcha';
		}

		do_action('html_forms_altcha_verified', $form, $data);

		return $error;
	}
}
