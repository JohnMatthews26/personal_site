import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

  }
  render(){
    console.log(this);


    return (

      <div className="project-item-container"
        onClick={ () => this.setState({ open: !this.state.open })}>

        <Modal
          open={ this.state.open }
          onClose={ () => this.setState({ open: false }) }
          center
          showCloseIcon={ true }
          className="modal">
          <div className="modal-box-container">

          </div>

        </Modal>

      </div>

    );
  }
}

export default withRouter(ProjectItem);
