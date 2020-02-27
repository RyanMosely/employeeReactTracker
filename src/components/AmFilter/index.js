import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


   

function AmFilter(props) {


  return (
  
    <span onChange={() => props.deparmentFilt()}>
      <input className='testTwo' type="checkbox" name="checkbox"></input> Toggle Sort Employee ID Highest - Lowest
      </span>
  
  );
}

export default AmFilter;
