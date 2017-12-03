/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */
import React from 'react';

class GoogleVision extends React.Component {
  componentWillUpdate = (nextProps) => {
    if (nextProps && nextProps.picture) {
      const detail = { picture: nextProps.picture };
      const readyEvent = new CustomEvent('analyzePicture', { detail });
      document.dispatchEvent(readyEvent);
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
