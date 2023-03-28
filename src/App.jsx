import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="hero-container">
        <Hero />
      </div>
    </div>
  );
}

export default App;
