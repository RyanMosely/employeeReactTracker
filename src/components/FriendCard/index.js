import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css";

/*
<div className="img-container">
<img alt={props.name} src={props.image} />
</div>


 <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>

*/

function FriendCard(props) {
  return (

    
    <div>
    <li className="card">
    
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Employee ID:</strong> {props.id}
          </li>
        </ul>
      </div>  
    </li>
    </div>
  );
}

export default FriendCard;
