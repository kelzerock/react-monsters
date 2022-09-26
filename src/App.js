import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((user) => setMonsters(user));
  }, []);

  useEffect(() => {
    const newArrayMonsters = monsters.filter((el) => {
      return el.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newArrayMonsters);
  }, [monsters, searchField]);

  const onChangeSearch = (event) => {
    const eventValue = event.target.value.toLowerCase();
    setSearchField(eventValue);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster rolodex</h1>
      <SearchBox
        className="search-box-mosters"
        placeholder="Search monster"
        onChangeHandler={onChangeSearch}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchMonster: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => {
//         return data.json();
//       })
//       .then((user) =>
//         this.setState(() => {
//           return { monsters: user };
//         })
//       );
//   }

//   onChangeSearch = (event) => {
//     const eventValue = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchMonster: eventValue };
//     });
//   };

//   render() {
//     const { monsters, searchMonster } = this.state;
//     const { onChangeSearch } = this;
//     const newArrayMonsters = monsters.filter((el) => {
//       return el.name.toLowerCase().includes(searchMonster);
//     });
//     return (
//       <div className="App">
//       <h1 className="app-title">Monster rolodex</h1>
//         <SearchBox
//           className="search-box-mosters"
//           placeholder="Search monster"
//           onChangeHandler={onChangeSearch}
//         />
//         <CardList monsters={newArrayMonsters} />
//       </div>
//     );
//   }
// }

export default App;
