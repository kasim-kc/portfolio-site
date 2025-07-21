import DescSection from "./components/DescSection";
import CardSection from "./components/CardSection";
import "./App.css";

function App() {
  return (
    <>
      <div className="main-container">
        <DescSection descPresent={true} education={false} />
        <DescSection descPresent={false} education={true} />
        <CardSection smCard={true} bigCard={false} />
        <CardSection bigCard={true} smCard={false} />
      </div>
    </>
  );
}

export default App;
