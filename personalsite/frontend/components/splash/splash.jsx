import React, { Component } from 'react';
import Modal from 'react-modal';
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

      <section className="splash-section">
        <span>Hi, I'm John Matthews, and I'm looking for a full time role as a
          <span ref="roleGeneration" className="keywords"></span>
        </span>
      </section>
    );
  }
}

export default withRouter(Splash);
