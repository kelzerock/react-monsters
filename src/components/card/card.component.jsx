import "./card.style.css";

const Card = ({ monster }) => {
     const {name, email} = monster
    return (
      <div className="card-container">
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${name}?set=set2`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }


export default Card;
