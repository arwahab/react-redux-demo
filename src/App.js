import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';


class App extends Component {
  state = {
    ninjas : [
      { name: "Splinter", age: 35, belt: "green", id: 0 },
      { name: "Donatello", age: 33, belt: "red", id: 1 },
      { name: "Shredder", age: 34, belt: "orange", id: 2 },
      { name: "Yoshi", age: 24, belt: "orange", id: 3 }
    ]
  }

  addNinja = (ninja) => {
   ninja.id = Math.random();
   //this a COPY of the above ninjas array NOT the same state/instance! 
   let ninjas = [...this.state.ninjas, ninja]
   this.setState({
     ninjas: ninjas
   })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas : ninjas
    })
  }
  //component life-cycle methods:
  
  componentDidMount(){
    console.log("component mounted");
  }

  componentDidUpdate(previousProps, previousState){
    console.log("component updated");
    console.log(previousProps, previousState);
  }
  render() {
    return (
      <div className="App" >
        <h1>ReactJS Demo</h1>
        <p>Innovation Day</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
  );
}
}

export default App;
