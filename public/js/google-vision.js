$(function(){
  console.error('we are the best programmers ever');
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
