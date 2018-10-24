import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';
import ProjectItem from './project_item';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

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
            <ProjectItem
              name="Dogstagram"
              type="Social Media"
              blurb="Dogstagram was my first true full-stack project.
              It is a social media site similar to Instagram, however,
              intended for users share pictures of their dogs."
              backend="Ruby on Rails"
              frontend="React/Redux"
              />
            <ProjectItem
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
              />
            <ProjectItem
              name="Tour de SF"
              type="Google Spatial Language Challenge App"
              blurb="We were one of four teams selected to
              compete in Google's Spatial Language Challenge.
              We were tasked with building an app that allows users
              to input spatial language directions from
              specific waypoints in San Francisco. The data collected from
              the challenge is now used for training AI to
              navigate using spatial language directions."
              />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Project);
