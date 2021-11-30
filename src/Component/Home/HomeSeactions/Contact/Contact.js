import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import '../../../../Global/GlobalStyle.css';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzq37xd', 'portfolio_template', form.current, 'user_BXxlWuVopHEZNoAJEVyHQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const hancleClickLinkedin = () => {
      window.open("https://www.linkedin.com/in/rayhanhossainjibon/");
  };
  const hancleClickGithub = () => {
      window.open("https://github.com/rjibon49");
  };
  const hancleClickFacebook = () => {
      window.open("https://www.facebook.com/rayhan.hossain016");
  };
    return (
        <Container className="text-white mt-5 py-5">
            <div className="text-center">
                <h1 className="fs-1 fw-bold"> Contact</h1>
                <div className="px-5 mx-5 text-center fs-5">
                    <p>Any question or remark? Just write a message!</p>
                </div>
            </div>
            <Row className="mt-5">
                <Col className="col-sm-12 col-md-6 col-xl-6">
                    <div className="mx-5">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" className="form-control my-2" name="user_name" id="formGroupExampleInput" placeholder="Full Name"/>
                                <input type="text" className="form-control my-2" name="user_subject" id="formGroupExampleInput" placeholder="Subject"/>
                                <input type="email" className="form-control my-2" name="user_email" id="formGroupExampleInput" placeholder="Email Address"/>
                                <textarea type="email" className="form-control my-2" name="message" id="formGroupExampleInput" placeholder="Write your message"/>
                                <input type="submit" className="btn-primary px-5 py-1 fs-4 rounded border-0 " value="Send" />
                            </div>
                        </form>
                    </div>
                </Col>
                <Col className="col-sm-12 col-md-6 col-xl-6">
                   <div className="d-flex flex-column">
                    <div className="mx-auto">
                            <div className="d-flex flex-column ms-5">
                                <i className="fas fa-location-arrow fs-4 my-2"><span className="ms-3">Dhaka, Bangladesh</span></i>
                                <i className="fas fa-envelope fs-4 my-2"> <span className="ms-3">rjibon49@gmail.com</span> </i>
                                <i className="fas fa-phone fs-4 my-2"> <span className="ms-3">+8801619972730</span> </i>
                            </div>
                        </div>
                        <div className="ms-5 d-flex justify-content-center">
                            <i className="fab fa-linkedin fs-1 mt-4 mx-3 socialLink"  onClick={hancleClickLinkedin}></i>
                            <i className="fab fa-github fs-1 mt-4 mx-3 socialLink"  onClick={hancleClickGithub}></i>
                            <i className="fab fa-facebook fs-1 mt-4 mx-3 socialLink"  onClick={hancleClickFacebook}></i>
                        </div>
                   </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;