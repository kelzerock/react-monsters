import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        },
        ()=>{console.log(this.state)})
      );
  }

  render() {
    console.log("render");
    return (
      <div className="App">
      <input className="search-monster" type='search' plaseholder='search monster' onChange={(event)=>{
        const eventValue = event.target.value;
        this.setState(()=>{
          return {monsters: this.state.monsters.filter(el=> (el.name).includes(eventValue) )}
        })
      }}/>
        {this.state.monsters.map((element) => {
          return (
            <div key={element.id}>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
