import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
Button.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string.isRequired,
};

function Button(props) {
  return (
    <button className="button">
      <Link to={props.link || ""}>{props.children}</Link>
    </button>
  );
}

export default Button;
