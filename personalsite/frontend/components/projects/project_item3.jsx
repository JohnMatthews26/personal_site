import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class ProjectItemThree extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render(){



    return (

      <div className="project-item-container">

        <Modal
          isOpen={ true }
          onRequestClose={ this.props.toggleModal3 }
          center
          shouldCloseOnOverlayClick={true}
          contentLabel="PhotoShowModal"
          className="photo-show-modal"
          >

          <div className="modal-box-container">
            <div className="project-item-content">
              <img src={this.props.img} className="project-img"></img>
            </div>

          </div>

        </Modal>

      </div>

    );
  }
}

export default withRouter(ProjectItemThree);
