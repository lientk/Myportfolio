import PropTypes from "prop-types";
import React from "react";
import "./style.css";

ContactButton.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function ContactButton(props) {
  const { contact } = props;
  return (
    <button
      className="contact__button"
      data-aos="fade-down-left"
      data-aos-delay={contact.delay}
      data-aos-duration="1000"
    >
      <a
        href={contact.link}
        target="_blank"
        className="contact__link"
        rel="noreferrer"
      >
        {contact.icon}
      </a>
    </button>
  );
}

export default ContactButton;
