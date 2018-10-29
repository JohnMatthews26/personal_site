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
        <div className="section-container">
          <div className="title-container">
            <h1 className="section-title" id="about-title">
              about
            </h1>
          </div>
          <div className="about-content-container">
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
            <section className="aboutme-blurb">
              <ul>
                <li className="blurb-li">
                  <div className="blurb-li-date">September 2014</div>
                  <div className="blurb-li-content">
                    I discovered my passion for coding
                    while working as a Trader and Operations Associate at
                    R-squared Macro, a global macro hedge fund.
                  </div>
                </li>
                  <li className="blurb-li">
                    <div className="blurb-li-date">May 2015</div>
                    <div className="blurb-li-content">
                      I was responsibile for building
                       out our trading infrastructure,
                       and out of necessity, I began learning various languages.
                   </div>
                 </li>
                 <li className="blurb-li">
                   <div className="blurb-li-date">October 2016</div>
                   <div className="blurb-li-content">
                     After the hedge fund closed,
                      I was contemplating a career change into Software Development.
                  </div>
                </li>
                <li className="blurb-li">
                  <div className="blurb-li-date">May 2017</div>
                  <div className="blurb-li-content">
                    While interning with a private equity group I decided to fully commit to
                    a career change, and
                    I moved out to San Francisco to attend App Academy.
                  </div>
                </li>
                <li className="blurb-li">
                  <div className="blurb-li-date">September 2017</div>
                  <div className="blurb-li-content">
                    I tentatively began job searching after my App Academy course concluded,
                    but felt I was not fully prepared to enter the workforce.
                  </div>
                </li>
                <li className="blurb-li">
                  <div className="blurb-li-date">Present</div>
                  <div className="blurb-li-content">
                    I am actively seeking full-time employment as a Software Developer.
                    I am open to relocation to most regions in the US, and would love to connect.
                    Please feel free to leave a message, and I will respond as soon as possible.

                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(AboutMe);
