import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import * as createjs from 'createjs';
import fireworkCreator from './firework_item';
import ReactDOM from 'react-dom';

class Firework extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  componentDidMount(){
    let fireworks = fireworkCreator();
    console.log(fireworks);
    let canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.stage = new createjs.Stage(canvas);
  }


  render(){

    return (

      <div className="firework-main-div">
        <canvas ref="canvas" width="100%" height="100%"> </canvas>
      </div>
    );
  }
}

export default withRouter(Firework);
