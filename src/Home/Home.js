/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import './index.css';
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import GoogleVision from '../GoogleVision';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.state = {
      picture: null,
    }
  }

  onDrop = (picture) => {
    if (picture && picture[0]) {
      this.setState({
        picture: picture[0],
      });
    }
  };


  render() {
    return (
      <div className="homepage">
        <div id="login">
          <h2>MicroMACRO Photo Upload App</h2>
          <div className="button">Login</div>
        </div>
        <div id='photoSection'>
          <PhotoUpload />
        <div>
          <PhotoUpload onDrop={this.onDrop} />
        </div>
        <div>
          <GoogleVision picture={this.state.picture} />
        </div>
      </div>
    );
  }
}

export default Home;
