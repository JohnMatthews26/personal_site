import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(id){
    let el = document.getElementById(id);
    if (el){
      el.scrollIntoView();
    }

  }
  render(){
    return (

      <div className="navbar-div">
        <div className="navbar-el" onClick={() => this.handleClick("splash-parent")}>home</div>
        <div className="navbar-el" onClick={() => this.handleClick("aboutme-parent")}>about</div>
        <div className="navbar-el" onClick={() => this.handleClick("projects-parent")}>projects</div>
        <div className="navbar-el" onClick={() => this.handleClick("skills-parent")}>skills</div>
      </div>
    );
  }
}

export default withRouter(Navbar);
