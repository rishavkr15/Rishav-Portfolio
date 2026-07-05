import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rishavkr15.com@gmail.com" data-cursor="disable">
                rishavkr15.com@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917780024121" data-cursor="disable">
                +91 77800 24121
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/rishavkr15"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/rishavkr15"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rishav Kumar</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
