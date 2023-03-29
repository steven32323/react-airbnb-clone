import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="image-wrapper">
        {props.spots === 0 ? <span className="available">SOLD OUT</span> : ""}

        {props.location === "online" ? (
          <span className="available">ONLINE</span>
        ) : (
          ""
        )}

        <img src={props.image} className="card--img" alt="Card" />
      </div>
      <p>
        ⭐ {props.rating} · {props.country}
      </p>
      <p>{props.description}</p>
      <p>
        <span>From ${props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
