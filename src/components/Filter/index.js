import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


   

function Filter(props) {

  return (
  
    <span onChange={() => props.deparmentFilt()}>
      <input className='test' type="checkbox" name="checkbox"></input> Filter Only Interns
      </span>
  
  );
}

export default Filter;
