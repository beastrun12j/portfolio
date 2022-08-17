import emailjs from "@emailjs/browser";
import "animate.css";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import contactImg from "../assets/img/contact-img.svg";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [visible, setVisible] = useState(false);
  const form = useRef();

  const onShowAlert = () => {
    setVisible(true);
    window.setTimeout(() => {
      setVisible(false);
    }, 10000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await emailjs.sendForm(
        "service_khrrwbq",
        "template_6fubnd4",
        form.current,
        "B_9e5lL7qDDoYnIER"
      );
      setButtonText("Send");
      form.current.reset();
      setStatus({ success: true, message: "Message sent successfully!" });
      onShowAlert();
    } catch (e) {
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
      onShowAlert();
    }
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
                  <form onSubmit={handleSubmit} ref={form}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="user_first_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="user_ last_name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="user_email"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                    {visible && (
                      <Col style={{ marginTop: "20px" }}>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
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
