/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */
import React from 'react';

/* @flow */
let dataDiv = null;

// import gapi from 'google-client-api';


class GoogleVision extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    console.error('i am getting', nextProps.picture);
    if (nextProps.picture) {
      var readyEvent = new Event('analyzePicture');

      debugger;
      document.dispatchEvent(readyEvent, { details: { picture: nextProps.picture } });

    }

  };


  render() {
    let wording = this.props.picture ? `I have a picture ${this.props.picture.name}... Processing...` : '...Waiting for input';

    return (
      <div>
        <span>{wording}</span>
      </div>
    );
  }
}

export default GoogleVision;
