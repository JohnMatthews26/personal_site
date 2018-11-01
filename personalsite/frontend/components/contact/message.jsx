import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      name: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    this.props.createMessage({body: this.state.body,
    name: this.state.name, email: this.state.email}).then( () => {
      this.setState({body: "", name: "", email:  ""});
    });
  }


  update(e){
    return event => this.setState({[e]: event.target.value});
  }



  render(){


    return (

      <section className="contact-section" id="contact-parent">
        <div className="section-container">
          <div className="title-container">
            <h1 className="section-title" id="contact-title">
              contact
            </h1>
          </div>
          <div id="contact-content-container">
            <form onSubmit={this.handleSubmit} className="contact-form">
              <input
                placeholder="Name"
                value={this.state.name}
                onChange={this.update('name')}
                className="contact-input"
                />
              <input
                placeholder="Email - Optional"
                value={this.state.email}
                onChange={this.update('email')}
                className="contact-input"
                />
              <textarea
                placeholder=""
                value={this.state.body}
                onChange={this.update('body')}
                id="contact-text-area"
                />
              <input type="submit" id="contact-submit-button"/>

            </form>

          </div>
          <div className="footer-bar">
            <div className="footer-bar-links">
              <a className="link" href="https://github.com/JohnMatthews26"
                target="_blank">
                <img src="./project_imgs/GitHub-logo.png"
                  className="link-logo-img">
                </img>
              </a>

              <a className="link"
                href="https://www.linkedin.com/in/john-matthews-41663280/"
                target="_blank">
                <img src="./project_imgs/linkedin_logo.png"
                  className="link-logo-img">
                </img>
              </a>

              <a className="link"
                href="./project_imgs/resume.pdf"
                target="_blank"
                id="resume-link">
                <img src="./project_imgs/resume_logo.png"
                  className="link-logo-img"
                  id="resume-pic">
                </img>
              </a>
            </div>
            <div className="copyright">
              John Matthews © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Message);
