import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';
import ProjectItemOne from './project_item1';
import ProjectItemTwo from './project_item2';
import ProjectItemThree from './project_item3';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open1: false,
      open2: false,
      open3: false
    };
    this.toggleModal1 = this.toggleModal1.bind(this);
    this.toggleModal2 = this.toggleModal2.bind(this);
    this.toggleModal3 = this.toggleModal3.bind(this);
    this.modalDiv1 = this.modalDiv1.bind(this);
    this.modalDiv2 = this.modalDiv2.bind(this);
    this.modalDiv3 = this.modalDiv3.bind(this);
  }

  toggleModal1(){

    this.setState({ open1: !this.state.open1 });
  }
  toggleModal2(){

    this.setState({ open2: !this.state.open2 });
  }
  toggleModal3(){

    this.setState({ open3: !this.state.open3 });
  }
  modalDiv1(){
    if (this.state.open1){

      return <ProjectItemOne
        toggleModal={this.toggleModal1}
        name="Dogstagram"
        type="Social Media"
        blurb="Dogstagram was my first true full-stack project.
        It is a social media site similar to Instagram, however,
        intended for users share pictures of their dogs."
        backend="Ruby on Rails"
        frontend="React/Redux"
        img="./project_imgs/Dogstagram_img.png"
        />;
    } else {

      return null;
    }
  }
  modalDiv2(){
    if (this.state.open2){

      return <ProjectItemTwo
        toggleModal={this.toggleModal2}
        name="transit ninja"
        type="Travel/Transportation"
        blurb="transit ninja is an iOS app that
        shows real time location of
        public transit busses in San Francisco.
        Users can input thier desired destination
        to see the optimal route, and determine which bus they need to get on."
        backend="Node.js/Express.js"
        frontend="React Native"
        stack="MERN stack"
        img="./project_imgs/transit_ninja.png"
        />;
    } else {

      return null;
    }
  }
  modalDiv3(){
    if (this.state.open3){

      return <ProjectItemThree
        toggleModal={this.toggleModal3}
        name="Tour de SF"
        type="Google Spatial Language Challenge App"
        blurb="We were one of four teams selected to
        compete in Google's Spatial Language Challenge.
        We were tasked with building an app that allows users
        to input spatial language directions from
        specific waypoints in San Francisco. The data collected from
        the challenge is now used for training AI to
        navigate using spatial language directions."
        backend="Ruby on Rails"
        frontend="React/Redux"
        img="./project_imgs/tour-de-sf_pic.png"
        />;
    } else {

      return null;
    }
  }
  render(){
    

    return (

      <section className="projects-section" id="projects-parent">
        <div className="section-container">
          <div className="title-container">
            <h1 className="section-title">
              projects
            </h1>
          </div>
          <div id="projects-content-container">
            <div id="project1-container" className="single-modal-container" onClick={this.toggleModal1}>
              {this.modalDiv1()}
            </div>
            <div id="project2-container" className="single-modal-container" onClick={this.toggleModal2}>
              {this.modalDiv2()}
            </div>
            <div id="project3-container" className="single-modal-container" onClick={this.toggleModal3}>
              {this.modalDiv3()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Project);
