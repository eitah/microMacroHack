/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */
import React from 'react';

/* @flow */
let ExifImage = require('exif').ExifImage;

// import gapi from 'google-client-api';

// import GoogleVisionClient from '@google-cloud/vision';

class GoogleVision extends React.Component {
  componentWillUpdate = (nextProps) => {
    if (nextProps && nextProps.picture) {
      const detail = { picture: nextProps.picture };
      const readyEvent = new CustomEvent('analyzePicture', { detail });
      document.dispatchEvent(readyEvent);
      new ExifImage({ image :  nextProps.picture}, function (error, exifData) {
        if (error)
          console.log('Error: '+error.message);
        else
          console.log(exifData); // Do something with your data!
      });
    }
  };


  render() {
    let picWording = this.props.picture ? `I have a picture ${this.props.picture.name}...` : '...Waiting for input';
    let wording = this.props.picture ? `...processing...` : '';
    return (
      <div>
        <div id={'status'}>{picWording}</div>
        <div id={'visionStatus'}>{wording}</div>
        <div id={'visionData'}> </div>
      </div>)
  }
}

export default GoogleVision;
