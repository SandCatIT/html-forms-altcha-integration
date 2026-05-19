=== Plugin Name ===
Tags: spam-protection, forms
Requires at least: 6.1
Tested up to: 6.7.1
Stable tag: 6.7.1
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add server powered altcha integration to your HTML Forms plugin.

== Installation ==

1. Upload `html-forms-altcha-integration.zip` to the `/wp-content/plugins/` directory
2. Unzip it.
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Add `<altcha-widget challenge="<?php echo esc_url(html_forms_altcha_get_challenge_url()); ?>"></altcha-widget>` tag inside your html contact form where you need the captcha.


== Changelog ==

= 1.0.2 =
* Changed to async script

= 1.0.0 =
* Initial commit
