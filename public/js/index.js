var viewport, projects, selectedProject, projectCells, selectedOutputCell

/**
 * Hide the login page and attach events to the logout button.
 */
function hideLogin() {
  // hide the login button
  $('#login').hide()
  $('#photoSection').css('display', 'flex')
  // attach the event handler to the logout button
  $('#logout').click(showLogin)
}

/**
 * Show the login page and attach events to the login button.
 */
function showLogin() {
  // ensure that the user is logged out and no longer stored on the page
  helpers.logout()
  // show the login button
  $('#logout').hide()
  $('#photoSection').hide()
  $('#login').css('display', 'flex')
  // attach event handler to the login button
  $('#login .button').click(function() { helpers.redirectToFluxLogin() })
}

function updateCellValue(project, cell, value) {
  var cell = getUser().getCell(project.id, cell.id)
  return cell.update({value: value})
}


/**
 * Start the application.
 */
function init() {
  // Check if we're coming back from Flux with the login credentials.
  helpers.storeFluxUser()
  // check that the user is logged in, otherwise show the login page
    .then(function() { return helpers.isLoggedIn() })
    .then(function(isLoggedIn) {
      if (isLoggedIn) {
        // if logged in, make sure the login page is hidden
        hideLogin()
        // run code to get lat/long data
        // PhotoUpload with then
        // inside the then, updateCellValue('aKjJnmmVX80bqm6We', '40a18e6507b8b186af90a9f3832cdad6', 'value')
      } else {
        showLogin();
      }
    })
}

// When the window is done loading, start the application.
window.onload = init
