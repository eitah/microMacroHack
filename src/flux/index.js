import {sdk, helpers} from "./helpers.js";

/**
 * Hide the login page and attach events to the logout button.
 */
const hideLogin = () => {
  // hide the login button
  document.getElementById('#login').hide()
}

/**
 * Show the login page and attach events to the login button.
 */
const showLogin = () => {
  // ensure that the user is logged out and no longer stored on the page
  helpers.logout()
  // show the login button
  document.getElementById('#login').css('display', 'flex')
  // attach event handler to the login button
  document.getElementById('#login .button').click(function() { helpers.redirectToFluxLogin() })
}

/**
 * Start the application.
 */
const init = () => {
  // Check if we're coming back from Flux with the login credentials.
  helpers.storeFluxUser()
  // check that the user is logged in, otherwise show the login page
    .then(function() { return helpers.isLoggedIn() })
    .then(function(isLoggedIn) {
      if (isLoggedIn) {
        // if logged in, make sure the login page is hidden
        hideLogin()
        alert('You\'re logged in!')
      } else {
        showLogin();
      }
    })
}

export default init;