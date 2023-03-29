import "./App.css";
import AvailableExperiences from "./components/data/AvailableExperiences";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/UI/Card";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-container">
        <Hero />
      </div>
      <div className="card--container">
        <AvailableExperiences />
      </div>
    </div>
  );
}

export default App;
