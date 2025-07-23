import DescSection from "./components/DescSection.jsx";
import CardSection from "./components/CardSection.jsx";
import Header from "./components/Header.jsx";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <Header />
      <DescSection descPresent={true} education={false} />
      <DescSection descPresent={false} education={true} />
      <CardSection smCard={true} bigCard={false} />
      <CardSection bigCard={true} smCard={false} />
    </div>
  );
}

export default App;
