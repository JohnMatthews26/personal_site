import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render(){



    return (

      <section className="projects-section" id="projects-parent">
        <div className="title-container">
          <h1 className="section-title">
            projects
          </h1>
        </div>
      </section>
    );
  }
}

export default withRouter(Project);
