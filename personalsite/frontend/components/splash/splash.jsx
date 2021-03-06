import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [" full-stack developer",
      " front-end developer",
      " software engineer"]
    };
    this.roleCreator = this.roleCreator.bind(this);
  }

  componentDidMount(){
    this.roleCreator();
    setInterval(this.roleCreator, 3000);
  }

  roleCreator(){
    let targetSpan = ReactDOM.findDOMNode(this.refs.roleGeneration);
    if(this.state.roles.length === 0){
      this.setState({["roles"]: [" full-stack developer",
      " front-end developer",
      " software engineer"]});
    }
    let roles = this.state.roles;

    let current = roles[0];
    roles = roles.slice(1);
    this.setState({["roles"]: roles});
    targetSpan.innerHTML = current;
  }


  render(){



    return (

      <section className="splash-section" id="splash-parent">
        <div className="section-container">
          <div className="title-container">
            <h1 className="section-title" id="splash-title">
              home
            </h1>
          </div>
          <div id="splash-content-container">
            <div id="splash-blurb">Hi, I'm
              <span className="keywords"> John Matthews</span>,
              and I'm looking for a full time role as a
              <br></br>
              <span ref="roleGeneration" className="keywords"></span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Splash);
