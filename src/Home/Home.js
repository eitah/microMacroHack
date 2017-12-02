/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import './index.css';
import PhotoUpload from "../PhotoUpload/PhotoUpload";
import init from "../flux/index.js";

class Home extends React.Component {

  componentDidMount(){
    {init}
  }
  
  render() {
    return (
      <div className="homepage">
        <div id="login">
          <h2>MicroMACRO Photo Upload App</h2>
          <div className="button">Login</div>
        </div>
        <div className='photoupload'>
          <PhotoUpload />
        </div>
      </div>
    );
  }
}

export default Home;
