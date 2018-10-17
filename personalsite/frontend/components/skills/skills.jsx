import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }





  render(){

    return (

      <section className="skills-section">
        <div className="section-container">
          <div className="title-container">
            <h1 className="section-title">
              skills
            </h1>
          </div>
          <div className="skills-container">
            <section id="languages">
              <h2 className="skills-h2">Languages</h2>
              <ul id="languages-ul" className="skills-ul">
                <li id="language-li" className="skills-li">Ruby</li>
                <li id="language-li" className="skills-li">Javascript</li>
                <li id="language-li" className="skills-li">HTML</li>
                <li id="language-li" className="skills-li">CSS</li>
                <li id="language-li" className="skills-li">SQL</li>
                <li id="language-li" className="skills-li">VBA</li>
                <li id="language-li" className="skills-li">Python</li>
              </ul>
            </section>
            <section id="frameworks">
              <h2 className="skills-h2">Frameworks</h2>
              <ul id="frameworks-ul" className="skills-ul">
                <li id="framework-li" className="skills-li">Ruby on Rails</li>
                <li id="framework-li" className="skills-li">React Native</li>
                <li id="framework-li" className="skills-li">Django</li>
              </ul>
            </section>
            <section id="libraries">
              <h2 className="skills-h2">Libraries/Miscellaneous</h2>
              <ul id="libraries-ul" className="skills-ul">
                <li id="library-li" className="skills-li">React-Redux</li>
                <li id="library-li" className="skills-li">JQuery</li>
                <li id="library-li" className="skills-li">Node.js</li>
                <li id="library-li" className="skills-li">Travis CI</li>
                <li id="library-li" className="skills-li"></li>
                <li id="library-li" className="skills-li"></li>
                <li id="library-li" className="skills-li">CreateJS</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Skills);
