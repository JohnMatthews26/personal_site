import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';


class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }
  render(){



    return (

      <section className="AboutMe-section">
        <section className="tidbit">
          <span>
            I am fascinated by people performing extraordinary mental feats.
            As a result, I enjoy witnessing and performing activities
            that involve strategy, tactical thinking,
            and using logical thinking/sequential reasoning
             to solve difficult challenges.
          </span>
        </section>
        <section className="hobbies">
          <span>
            Most of my hobbies revolve around my aforementioned core interests.
          </span>
          <ul>
            
          </ul>
        </section>
      </section>
    );
  }
}

export default withRouter(AboutMe);
