import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
// import * as createjs from 'createjs-easeljs';
import fireworkCreator from './firework_item';
import ReactDOM from 'react-dom';


class Firework extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.playFireworks = this.playFireworks.bind(this);
    this.fireworkShow = this.fireworkShow.bind(this);
  }
  componentDidMount(){
    // console.log(window.location.origin);
    let fireworks = fireworkCreator();
    console.log(fireworks);
    let canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.stage = new createjs.Stage(canvas);
    this.fireworkShow(fireworks);
  }
  fireworkShow(fireworks){
    // console.log(fireworks);
    this.playFireworks(fireworks[0]);
    this.playFireworks(fireworks[1]);
    this.playFireworks(fireworks[2]);
    this.playFireworks(fireworks[3]);
    this.playFireworks(fireworks[4]);
    this.playFireworks(fireworks[5]);
    this.playFireworks(fireworks[6]);


  }

  playFireworks(el){
    console.log(el);
    let imagedup = el.imageString;
    let stage = this.stage;
    setInterval(singleFirework,100);
    function singleFirework() {
// need to fix the image file paths. currently says localhost//images/fw01...etc
      let fireworkbitmap = new createjs.Bitmap(imagedup[0]);
      fireworkbitmap.x = el.xcoord;
      fireworkbitmap.y = el.ycoord;
      stage.addChild(fireworkbitmap);
      stage.update();
      imagedup = imagedup.slice(1);
      if (imagedup.length === 0){
        stage.removeAllChildren();
        clearInterval(singleFirework);
        stage.update();
      }

    }
  }

  render(){

    return (

      <div className="firework-main-div">
        <canvas id="canvas" ref="canvas" width="600px" height="600px"> </canvas>
      </div>
    );
  }
}

export default withRouter(Firework);
