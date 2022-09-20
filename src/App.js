import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: "Aleksei",
        lastName: "Zhuchkov",
      },
      company: "ASB",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}! You
            are working in {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState({
                name: {
                  firstName: "Egor",
                  lastName: 'Zhuchkov'
                },
                company: 'xxx'
              });
              console.log(this.state);
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
