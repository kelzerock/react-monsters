import { Component } from "react";

class CardList extends Component {

  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((el) => {
          return <h1 key={el.id}>{el.name}</h1>;
        })}
      </div>
    );
  }
}

export default CardList;

//  {newArrayMonsters.map((element) => {
//  return (
//      <div key={element.id}>
//        <h1>{element.name}</h1>
//      </div>
//    );
//  })}
