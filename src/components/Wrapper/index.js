import React from "react";
import "./style.css";

function Wrapper(props) {
  return <ul className="wrapper">{props.children}</ul>;
}

export default Wrapper;
