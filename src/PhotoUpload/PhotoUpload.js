/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import './index.css';
import ImageUploader from 'react-images-upload'

class PhotoUpload extends React.Component {

  render() {
    return (
      <div>
        <div id="welcome">Welcome!</div>
        <div>Please input your image below.</div>
        <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.props.onDrop}
          imgExtension={['.jpg', 'jpeg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
      </div>
    );
  }
}

export default PhotoUpload;
