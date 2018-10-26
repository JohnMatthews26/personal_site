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
              <div className="project-img-container">
                <img src={this.props.img} className="project-img"></img>
              </div>
              <div className="project-item-info">
                <div className="project-title-div">
                  <h2 className="project-title">{this.props.name}</h2>
                  <h3 className="project-info">{this.props.backend}</h3>
                  <h3 className="project-info">{this.props.frontend}</h3>
                </div>
                <div className="project-blurb-div">{this.props.blurb}</div>
              </div>
            </div>

          </div>

        </Modal>

      </div>

    );
  }
}

export default withRouter(ProjectItemThree);
