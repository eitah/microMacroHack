/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import './index.css';
import PhotoUpload from "../PhotoUpload/PhotoUpload";

class Home extends React.Component {

  render() {
    return (
      <div className="homepage">
        <div id="login">
          <h2>MicroMACRO Photo Upload App</h2>
          <div className="button">Login</div>
        </div>
        <div>
          <PhotoUpload />
        </div>
      </div>
    );
  }
}

export default Home;
