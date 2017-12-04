<?php
/**
 * Plugin Name: Facebook Pixel for Thrive Quiz
 * Plugin URI: https://commercestore.com
 * Version: 1.1.0
 * Author: <a href="https://commercestore.com">CommerceStore</a>
 * Description: Fire the Facebook Pixel on all Thrive Events
 */


/**
 * Add our interceptor javascript. This fires on the return of every AJAX call
 * and allows google analytics to work appropriately.
 */

function mpk_scripts()
{
	// Register the script like this for a plugin:
	wp_register_script( 'mpk_intercept', plugins_url( '/assets/js/intercept.js', __FILE__ ) );

	// For either a plugin or a theme, you can then enqueue the script:
	wp_enqueue_script( 'mpk_intercept' );
}
add_action( 'wp_enqueue_scripts', 'mpk_scripts' );


