<?php

/**
 * ALTCHA challenge creation and verification.
 *
 * @package Html_Forms_Altcha_Integration
 */

use AltchaOrg\Altcha\Algorithm\Argon2id;
use AltchaOrg\Altcha\Algorithm\DeriveKeyInterface;
use AltchaOrg\Altcha\Algorithm\Pbkdf2;
use AltchaOrg\Altcha\Algorithm\Scrypt;
use AltchaOrg\Altcha\Altcha;
use AltchaOrg\Altcha\Challenge;
use AltchaOrg\Altcha\ChallengeParameters;
use AltchaOrg\Altcha\CreateChallengeOptions;
use AltchaOrg\Altcha\HmacAlgorithm;
use AltchaOrg\Altcha\Payload;
use AltchaOrg\Altcha\Solution;
use AltchaOrg\Altcha\VerifySolutionOptions;

/**
 * Wraps altcha-org/altcha for WordPress options + HTML Forms payloads.
 */
class Html_Forms_Altcha_Service {

	/**
	 * @return Altcha|null
	 */
	public static function get_altcha() {
		require_once __DIR__ . '/html-forms-altcha-options.php';

		$sig = get_option(HTML_FORMS_ALTCHA_OPTION_HMAC_SIGNATURE_SECRET, '');
		$key_sig = get_option(HTML_FORMS_ALTCHA_OPTION_HMAC_KEY_SIGNATURE_SECRET, '');

		if (! is_string($sig) || $sig === '' || ! is_string($key_sig) || $key_sig === '') {
			return null;
		}

		return new Altcha(
			hmacSignatureSecret: $sig,
			hmacKeySignatureSecret: $key_sig,
		);
	}

	/**
	 * Challenge array for REST / widget (root shape: parameters + signature).
	 *
	 * @return array<string, mixed>|null
	 */
	public static function create_challenge_array() {
		$altcha = self::get_altcha();
		if ($altcha === null) {
			return null;
		}

		$pbkdf2 = new Pbkdf2();

		$counter_bounds = apply_filters(
			'html_forms_altcha_counter_bounds',
			array(
				'min' => 5000,
				'max' => 10000,
			)
		);

		$min = isset($counter_bounds['min']) ? (int) $counter_bounds['min'] : 5000;
		$max = isset($counter_bounds['max']) ? (int) $counter_bounds['max'] : 10000;
		if ($max < $min) {
			$max = $min;
		}

		$cost = (int) apply_filters('html_forms_altcha_challenge_cost', 5000);
		if ($cost < 1) {
			$cost = 5000;
		}

		$ttl = (int) apply_filters('html_forms_altcha_challenge_ttl_seconds', 600);
		if ($ttl < 60) {
			$ttl = 600;
		}

		$options = new CreateChallengeOptions(
			algorithm: $pbkdf2,
			cost: $cost,
			counter: random_int($min, $max),
			expiresAt: time() + $ttl,
		);

		$options = apply_filters('html_forms_altcha_challenge_options', $options, $pbkdf2);

		if (! $options instanceof CreateChallengeOptions) {
			$options = new CreateChallengeOptions(
				algorithm: $pbkdf2,
				cost: $cost,
				counter: random_int($min, $max),
				expiresAt: time() + $ttl,
			);
		}

		$challenge = $altcha->createChallenge($options);

		return $challenge->toArray();
	}

	/**
	 * Verify base64 JSON payload from ALTCHA widget hidden field.
	 */
	public static function verify_payload_string(string $altcha_field): bool {
		$altcha = self::get_altcha();
		if ($altcha === null) {
			return false;
		}

		$raw = base64_decode($altcha_field, true);
		if ($raw === false || $raw === '') {
			return false;
		}

		$data = json_decode($raw, true);
		if (! is_array($data)) {
			return false;
		}

		if (! isset($data['challenge'], $data['solution']) || ! is_array($data['challenge']) || ! is_array($data['solution'])) {
			return false;
		}

		$c = $data['challenge'];
		if (! isset($c['parameters']) || ! is_array($c['parameters'])) {
			return false;
		}

		$params = ChallengeParameters::fromArray($c['parameters']);
		$signature = isset($c['signature']) && is_string($c['signature']) ? $c['signature'] : null;
		$challenge = new Challenge($params, $signature);

		$s = $data['solution'];
		if (! isset($s['counter'], $s['derivedKey']) || ! is_string($s['derivedKey'])) {
			return false;
		}

		if (! is_numeric($s['counter'])) {
			return false;
		}

		$time = isset($s['time']) && is_numeric($s['time']) ? (float) $s['time'] : null;
		$solution = new Solution((int) $s['counter'], $s['derivedKey'], $time);

		$algorithm = self::algorithm_for_name($params->algorithm);
		if ($algorithm === null) {
			return false;
		}

		$payload = new Payload($challenge, $solution);
		$result = $altcha->verifySolution(new VerifySolutionOptions($payload, $algorithm));

		return $result->verified;
	}

	/**
	 * @return DeriveKeyInterface|null
	 */
	private static function algorithm_for_name(string $name) {
		if (str_starts_with($name, 'PBKDF2/')) {
			$hmac = match (substr($name, 7)) {
				'SHA-384' => HmacAlgorithm::SHA384,
				'SHA-512' => HmacAlgorithm::SHA512,
				default => HmacAlgorithm::SHA256,
			};

			return new Pbkdf2($hmac);
		}

		if ($name === 'ARGON2ID') {
			if (! function_exists('sodium_crypto_pwhash')) {
				return null;
			}

			return new Argon2id();
		}

		if ($name === 'SCRYPT') {
			if (! function_exists('scrypt')) {
				return null;
			}

			return new Scrypt();
		}

		return null;
	}
}
