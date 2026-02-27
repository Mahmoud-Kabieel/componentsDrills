import "./App.css";
import PriceTag from "./components/PriceTag";
function App() {
  return (
    <div className="bg-cyan-500">
      <PriceTag amount={1000} currency="USD" discount={25} />
    </div>
  );
}

export default App;
