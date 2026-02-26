import "./App.css";
import Badge from "./components/Badge";

function App() {
  return (
    <div className="bg-cyan-500">
      <Badge status="success" label="Hello" />
      <Badge status="warning" />
    </div>
  );
}

export default App;
