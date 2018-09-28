import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import * as createjs from 'createjs-easeljs';

class Firework extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render(){



    return (

      <div className="firework-main-div">
        <canvas id="displayCanvas"> </canvas>
      </div>
    );
  }
}

export default withRouter(Firework);
