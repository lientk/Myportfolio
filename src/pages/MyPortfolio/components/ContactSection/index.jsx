import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./style.css";

function Contact(props) {
  return (
    <div className="contact__container" id="contact">
      <div
        className="contact__content"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h3>Contact</h3>
        <p>
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <ul className="contact__info-list">
          <li className="contact__info-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <a href="mailto:truonglien01102001@gmail.com">
              truonglien01102001@gmail.com
            </a>
          </li>
          <li className="contact__info-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>0382604120</span>
          </li>
          <li className="contact__info-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <span>
              Tổ 1, Đường 01, Khu phố Ông Đông, phường Tân Hiệp, thị xã Tân
              Uyên, tỉnh Bình Dương
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Contact.propTypes = {};

export default Contact;
