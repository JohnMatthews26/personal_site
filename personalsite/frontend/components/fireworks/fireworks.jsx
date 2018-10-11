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
      fireworks: ""
    };
    this.playFireworks = this.playFireworks.bind(this);
    this.fireworkShow = this.fireworkShow.bind(this);

  }
  componentDidMount(){

    let fireworks = fireworkCreator();
    this.setState({["fireworks"]: fireworks});

    let canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.stage = new createjs.Stage(canvas);
    setInterval(this.fireworkShow, 5000);
  }

  fireworkShow(){
    let stage = this.stage;

    this.playFireworks(this.state.fireworks[0]);
    this.playFireworks(this.state.fireworks[1]);
    this.playFireworks(this.state.fireworks[2]);
    this.playFireworks(this.state.fireworks[3]);
    this.playFireworks(this.state.fireworks[4]);
    this.playFireworks(this.state.fireworks[5]);
    this.playFireworks(this.state.fireworks[6]);
    setTimeout(removeFireworks, 2000);

    function removeFireworks() {
      console.log("running 2k");
      stage.removeAllChildren();
      stage.update();
    }
  }

  playFireworks(el){

    let imagedup = el.imageString;
    let stage = this.stage;
    // setInterval(singleFirework,100);
    createjs.Ticker.addEventListener("tick", singleFirework);

    function singleFirework() {

      let fireworkbitmap = new createjs.Bitmap(imagedup[0]);
      fireworkbitmap.x = el.xcoord;
      fireworkbitmap.y = el.ycoord;
      stage.addChild(fireworkbitmap);
      stage.update();

      imagedup = imagedup.slice(1);
      if (imagedup.length === 0){

        // clearInterval(singleFirework);
        createjs.Ticker.removeEventListener("tick", singleFirework);

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
