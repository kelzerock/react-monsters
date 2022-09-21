import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMonster: '',
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
        this.setState(
          () => {
            return { monsters: user };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    console.log("render");
    const newArrayMonsters = this.state.monsters.filter((el) => {
      return el.name.toLowerCase().includes(this.state.searchMonster);
    });
    console.log(newArrayMonsters)
    return (
      <div className="App">
        <input
          className="search-monster"
          type="search"
          plaseholder="search monster"
          onChange={(event) => {
            const eventValue = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchMonster: eventValue };
            });
          }}
        />
        {newArrayMonsters.map((element) => {
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
