import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";


   

function ManaFilter(props) {

console.log('howdy');    

  return (
  
    <span onChange={() => props.deparmentFiltThree()}>
      <input className='testThree' type="checkbox" name="checkbox"></input> HawHaw
      </span>
  
  );
}

export default ManaFilter;
