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
            <form onSubmit={this.handleSubmit}>
              <input
                placeholder="Name"
                value={this.state.name}
                onChange={this.update('name')}
                />
              <input
                placeholder="Email - Optional"
                value={this.state.email}
                onChange={this.update('email')}
                />
              <textarea
                placeholder=""
                value={this.state.body}
                onChange={this.update('body')}
                />
              <input type="submit"/>

            </form>

          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Message);
