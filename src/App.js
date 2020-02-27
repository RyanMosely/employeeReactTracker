import React, { Component } from "react";
import Filter from "./components/Filter";
import AmFilter from "./components/AmFilter";
import ManaFilter from "./components/ManaFilter";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import ReactDOM from "react-dom";

const initialState = {
  friends
};


class App extends Component {
  state = {
    friends
  };

  constructor(props) {
    super(props)
    this.state = initialState;
}


//FILTER METHOD

  deparmentFilt = () => {
  

   this.setState({ friends }); 

   const node = ReactDOM.findDOMNode(this);
   
   if (node instanceof HTMLElement) {
    const child = node.querySelector('.test');
    const childTwo = node.querySelector('.testTwo');
    const childThree = node.querySelector('.testThree');


    if (child.checked === true) {

    }
    
    this.setState({ friends });

    if(child.checked === true){
      
      let friends = this.state.friends.filter(friend => friend.network === "i");
      
      this.setState({ friends });

    }
    }
  };


//SORT METHOD

  deparmentFiltTwo = () => {


    let friends = this.state.friends

    friends.sort((a, b) => 1 - 2)

    this.setState({ friends });
    console.log(friends);
   
  };






  render() {
    return (
      <Wrapper>
        <Title>Company Employee/Intern List</Title>

        <Filter
        deparmentFilt={this.deparmentFilt}
        />

        <AmFilter
        deparmentFilt={this.deparmentFiltTwo}
        />

       
        <br></br>

        
        <div>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            occupation={friend.occupation}
          />
        ))}
      </div>

      </Wrapper>
    );
  }
}

export default App;
