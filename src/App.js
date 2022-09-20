import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [
        {
          name: 'Kristy'
        },
        {
          name: 'Katty'
        },
        {
          name: 'Alex'
        },
        {
          name: 'Egor'
        },
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monster.map((element) => {
          return <h1>{element.name}</h1>
        })}
      </div>
    );
  }
}

export default App;
