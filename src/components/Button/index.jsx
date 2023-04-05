import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
Button.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
};

function Button(props) {
  return (
    <button className="button">
      <Link to={props.link || ""} target="_blank">
        {props.children}
      </Link>
    </button>
  );
}

export default Button;
