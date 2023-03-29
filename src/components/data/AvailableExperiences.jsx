import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

import Card from "../UI/Card";

const DUMMY_DATA = [
  {
    id: 1,
    img: card1,
    rating: "5.0 (6)",
    description: "Life lessons with Katie Zaferes",
    price: 136,
    positionsLeft: 0,
    country: "USA",
  },
  {
    id: 2,
    img: card2,
    rating: "5.0 (30)",
    description: "Learn wedding photography",
    price: 125,
    location: "online",
    positionsLeft: 28,
    country: "USA",
  },
  {
    id: 3,
    img: card3,
    rating: "4.8 (2)",
    description: "Group Mountain Biking",
    price: 50,
    positionsLeft: 5,
    country: "USA",
  },
];

const AvailableExperiences = () => {
  const experiencesList = DUMMY_DATA.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      image={item.img}
      rating={item.rating}
      description={item.description}
      price={item.price}
      spots={item.positionsLeft}
      country={item.country}
      location={item.location}
    />
  ));
  return experiencesList;
};
export default AvailableExperiences;
