let picture

$(function(){
  document.addEventListener('analyzePicture', function (e) {
    // const picture = e.detail && e.detail.picture;
    function start() {
      // 2. Initialize the JavaScript client library.
      let pic = $('.uploadPicture')[0].src;
      let base64encodedPic = pic.split(',')[1];
      gapi.client.init({
        'apiKey': 'AIzaSyB5pYEJ_Goht46AH6i6Wc9j1OHzS0VIu5I',
        // clientId and scope are optional if auth is not required.
//        'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
//        'scope': 'profile',
      }).then(function() {
        // 3. Initialize and make the API request.
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
                  "content": base64encodedPic
                }
              }
            ]
          }
        })
      }).then(function(response) {
        // console.log(response.result);
        return parseResult(response.result);

      }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
      });
    };
    // 1. Load the JavaScript client library.
    gapi.load('client', start);
  }, false);
})

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function getNow() {
  const today = new Date();
  return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
}


function parseResult(result) {
  let googleData = result.responses[0] && result.responses[0].labelAnnotations;
  displayResult(googleData);
  let parsedGoogleData =  googleData.filter(img => img.score > 0.5).map(img => img.description);
  sendToFlux(parsedGoogleData);
  return parsedGoogleData;
}

function sendToFlux(categories) {
  let finalData = {
    categories, latitude: '41.895912', longitude: '-87.651993' };
  // console.error('HERES THE DATA WERE SENDING TO FLUX', JSON.stringify(finalData));
  updateCellValue({ id: 'aKjJnmmVX80bqm6We'}, { id: '40a18e6507b8b186af90a9f3832cdad6'}, finalData)
}


function displayResult(googleData) {
  let rawData, prettyData, reallyPretty;
  rawData = googleData.map(img => {
    return { score: (img.score).toFixed(4), description: img.description }
  });
  $('#visionStatus').text('...filtering...');
  $('#visionData').text(JSON.stringify(rawData));
  sleep(4000).then(()=>{
    $('#visionStatus').text('...building ouput...');
    prettyData = rawData.filter(img => img.score > 0.5);
    $('#visionData').text(JSON.stringify(prettyData));
  })
  sleep(4000).then(()=>{
    $('#visionStatus').text('...sending data to Flux...');
    reallyPretty = prettyData.map(img => img.description);
    $('#visionData').text(JSON.stringify(reallyPretty));
  })
}
