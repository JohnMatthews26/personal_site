import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import ReactDOM from 'react-dom';

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }





  render(){

    return (

      <section className="AboutMe-section" id="aboutme-parent">
        <div className="title-container">
          <h1 className="section-title">
            about
          </h1>
        </div>
        <section className="hobbies">
          <ul className="hobbies-ul">
            <li className="hobbies-li">
              <div className="hobby-img-text-div">
                <h2 className="hobby-title">Chess</h2>
              </div>
              <img
                className="hobbies-img"
                src="https://images.unsplash.com/photo-1536743939714-23ec5ac2dbae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2bda9458d5506c648953ffba2dd76fd1&auto=format&fit=crop&w=1437&q=80">
              </img>
            </li>
            <li className="hobbies-li">
              <div className="hobby-img-text-div">
                <h2 className="hobby-title">Sports</h2>

              </div>
              <img
                className="hobbies-img"
                 src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fimages%2F13-tiger-woods-2001-fs.jpg&w=800&q=85">
               </img>
             </li>
            <li className="hobbies-li">
              <div className="hobby-img-text-div">
                <h2 className="hobby-title">Roscoe</h2>

              </div>
              <img
                className="hobbies-img"
                id="Roscoe"
                 src="https://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0354_p3hunu.jpg">
               </img>
             </li>
           </ul>
           <ul className="hobbies-ul">
            <li className="hobbies-li">
              <div className="hobby-img-text-div">
                <h2 className="hobby-title">ESports</h2>

              </div>
              <img
                className="hobbies-img"
                 src="https://gaia.adage.com/images/bin/image/20170305_HelenaKristiansson_IEMKatowice_11001_IMG20170330.jpg">
               </img>
             </li>
            <li className="hobbies-li">
              <div className="hobby-img-text-div">
                <h2 className="hobby-title">Reading</h2>

              </div>
              <img
                className="hobbies-img"
                 src="https://images-na.ssl-images-amazon.com/images/I/81UYcz88xuL.jpg">
               </img>
             </li>
            <li className="hobbies-li">
              <div className="hobby-img-text-div">
                <h2 className="hobby-title">Coding</h2>

              </div>
              <img
                className="hobbies-img"
                 src="https://images.readwrite.com/wp-content/uploads/2018/04/coding-825x500.jpg">
               </img>
             </li>
          </ul>
        </section>
      </section>
    );
  }
}

export default withRouter(AboutMe);
