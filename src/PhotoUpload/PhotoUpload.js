/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import './index.css';
import ImagesUpload from 'react-images-upload'


class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploading: false,
      file: '',
    }
  }

  uploadImage = () => {
    const file = this.state.file;
    console.log('i am selecting a file', file);
  }

  render() {
    return (
      <div>
        Please select your file below
        <div id='photoupload'>
          <input className="input" />
          <div className="fileBrowser" onClick={this.uploadImage}>Select a file</div>
        </div>
        <ImagesUpload></ImagesUpload>
      </div>
    );
  }
}

export default PhotoUpload;
