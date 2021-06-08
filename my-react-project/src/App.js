import "./App.css";
import Countries from "./Countries";
import Play from "./Play";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Play />
          <Countries />
        </div>
      </header>
    </div>
  );
}

export default App;
