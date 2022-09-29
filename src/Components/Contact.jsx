import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import TrackVisibility from "react-on-screen";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const SERVICE_ID = "service_hdc70rt";
  const TEMPLATE_ID = "template_uccb61k";
  const USER_ID = "tjSBze7Rp8m252Qv_";

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    console.log(e.target);
    e.target.reset();
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleOnSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <Form.Field
                          id="form-input-control-email"
                          control={Input}
                          label="Email"
                          name="user_email"
                          placeholder="Email…"
                          required
                          icon="mail"
                          iconPosition="left"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <Form.Field
                          id="form-input-control-last-name"
                          control={Input}
                          label="Name"
                          name="user_name"
                          placeholder="Name…"
                          required
                          icon="user circle"
                          iconPosition="left"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <Form.Field
                          id="form-textarea-control-opinion"
                          control={TextArea}
                          label="Message"
                          name="user_message"
                          placeholder="Message..."
                          required
                        />
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
