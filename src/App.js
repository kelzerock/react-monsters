import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((user) =>
        this.setState({ monster: user })
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monster.map((element, index) => {
          return (
            <div key={index}>
              <h1>{element.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
