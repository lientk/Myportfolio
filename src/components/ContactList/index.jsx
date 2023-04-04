import React from "react";

import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactButton from "../ContactButton";
import "./style.css";

function ContactList() {
  const contactList = [
    {
      id: 1,
      link: "https://www.facebook.com/WsRV.Tien69/",
      icon: <FontAwesomeIcon className="contact__icon" icon={faFacebookF} />,
      delay: "200",
    },
    {
      id: 2,
      link: "https://www.instagram.com/keem_liennn/",
      icon: <FontAwesomeIcon className="contact__icon" icon={faInstagram} />,
      delay: "300",
    },
    {
      id: 3,
      link: "mailto:truonglien01102001@gmail.com",
      icon: <FontAwesomeIcon className="contact__icon" icon={faEnvelope} />,
      delay: "400",
    },
    {
      id: 4,
      link: "https://www.linkedin.com/in/lien-truong-4b403a230/",
      icon: <FontAwesomeIcon className="contact__icon" icon={faLinkedin} />,
      delay: "500",
    },
    {
      id: 5,
      link: "https://github.com/Lien-1",
      icon: <FontAwesomeIcon className="contact__icon" icon={faGithub} />,
      delay: "600",
    },
  ];
  return (
    <div className="contact__list">
      {contactList.map((contact) => {
        return <ContactButton key={contact.id} contact={contact} />;
      })}
    </div>
  );
}

export default ContactList;
