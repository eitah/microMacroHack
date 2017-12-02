/**
 * React Static Boilerplate
 * Copyright (c) 2015-present Kriasoft. All rights reserved.
 */

/* @flow */

import React from 'react';
import './index.css';

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h2>Welcome to microMacro</h2>
        <div id="login">
          <div className="button">Login</div>
        </div>
      </div>
    );
  }
}

export default Home;
