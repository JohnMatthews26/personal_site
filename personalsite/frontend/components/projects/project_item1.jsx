import React, { Component } from 'react';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


class ProjectItemOne extends Component {
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
          onRequestClose={ this.props.toggleModal1 }
          center
          shouldCloseOnOverlayClick={true}
          contentLabel="PhotoShowModal"
          className="photo-show-modal"
          >

          <div className="modal-box-container">
            <div className="project-item-content">
              <div className="project-img-container">
                <img src={this.props.img} className="project-img"></img>
              </div>
              <div className="project-item-info">
                <h2>{this.props.name}</h2>
              </div>
            </div>

          </div>

        </Modal>

      </div>

    );
  }
}

export default withRouter(ProjectItemOne);
