import Card from "../card/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((el) => {
      return <Card monster={el} key={el.id} />;
    })}
  </div>
);

export default CardList;

//  {newArrayMonsters.map((element) => {
//  return (
//      <div key={element.id}>
//        <h1>{element.name}</h1>
//      </div>
//    );
//  })}
