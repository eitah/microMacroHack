/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import GoogleVisionClient from '@google-cloud/vision';

class GoogleVision extends React.Component {
  componentWillReceiveProps = (nextProps) => {
    console.error('i am getting', nextProps.picture);
  }

  render() {
    let wording = this.props.picture ? `I have a picture ${this.props.picture.name}... Processing...` : '...Waiting for input';

    return (
      <span>{wording}</span>
    );
  }
}

export default GoogleVision;
