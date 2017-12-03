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

$(function(){
  console.log('we are the best programmers ever');
  document.addEventListener('analyzePicture', function (e) {
    console.log('we are the best programmers ever');
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client.init({
        'apiKey': 'AIzaSyDcY33nVnhMi4lXS9edGulipdf1FLSMoxg',
        // clientId and scope are optional if auth is not required.
//        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//        'scope': 'profile',
      }).then(function() {
        // 3. Initialize and make the API request.
        console.log('request issuing')
        return gapi.client.request({
//          'path': 'https://people.googleapis.com/v1/people/me?requestMask.includeField=person.names',
          'path': 'https://vision.googleapis.com/v1/images:annotate',
          'method': 'POST',
          'body': {
            "requests": [
              {
                "features": [
                  {
                    "type": "LABEL_DETECTION"
                  }
                ],
                "image": {
                  "source": {
                    "imageUri": "gs://micro-macro-hack/20171202_114603.jpg"
                  }
                }
              }
            ]
          }
        })
      }).then(function(response) {
        console.log(response.result);

      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);



  }, false);
})
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
