import heroimg from "../assets/airbnb-hero.png";
import "../components/Hero.css";

const Hero = () => {
  return (
    <section className="hero--section">
      <img src={heroimg} />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};
export default Hero;
