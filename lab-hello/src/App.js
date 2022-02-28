// src/App.js
import './App.css';
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Cards from "./components/Cards"
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

const card1 = {
  img: icon1,
  title: "Declarative",
  text: "React makes it painless to create interactive UIS."
}

const card2 = {
  img: icon2,
  title: "Components",
  text: "Build encapsulated compenents that manage their state."
}

const card3 = {
  img: icon3,
  title: "Single-Way",
  text: "A ser of immutable values are passed to the component's."
}

const card4 = {
  img: icon4,
  title: "JSX",
  text: "Statically-typed, designed to run on modern browsers."
}
function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      
      <footer className="footer">
        <Cards card = {card1} />
        <Cards card = {card2} />
        <Cards card = {card3} />
        <Cards card = {card4} />
      </footer>
    </div>
  );
}
export default App;
