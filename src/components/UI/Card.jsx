import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} className="card--img"></img>
      <p>⭐ {props.rating} · USA</p>
      <p>{props.description}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
};
export default Card;
