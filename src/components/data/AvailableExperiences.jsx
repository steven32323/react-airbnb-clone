import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";

import Card from "../UI/Card";

const DUMMY_DATA = [
  {
    id: 1,
    img: card1,
    rating: "5.0",
    description: "Life lessons with Katie Zaferes",
    price: 136,
  },
  {
    id: 2,
    img: card2,
    rating: "5.0",
    description: "Learn wedding photography",
    price: 125,
  },
  {
    id: 3,
    img: card3,
    rating: "4.8",
    description: "Group Mountain Biking",
    price: 50,
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
    />
  ));
  return experiencesList;
};
export default AvailableExperiences;
