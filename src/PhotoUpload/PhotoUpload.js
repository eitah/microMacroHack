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
        <p className='photo-upload'>Please select your file below</p>
        <div id='photoupload'>
          <input className="input" />
          <div className="fileBrowser" onClick={this.uploadImage}>Select a file</div>
        </div>
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
