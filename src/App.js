import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMonster: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((user) =>
        this.setState(() => {
          return { monsters: user };
        })
      );
  }

  onChangeSearch = (event) => {
    const eventValue = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchMonster: eventValue };
    });
  };

  render() {
    const { monsters, searchMonster } = this.state;
    const { onChangeSearch } = this;
    const newArrayMonsters = monsters.filter((el) => {
      return el.name.toLowerCase().includes(searchMonster);
    });
    return (
      <div className="App">
        <SearchBox
          className="search-box"
          placeholder="Search monster"
          onChangeHandler={onChangeSearch}
        />
        <CardList monsters={newArrayMonsters} />
      </div>
    );
  }
}

export default App;
