import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather Search </h1>
        <Weather />
      </header>
      <footer>
        This project was coded by JhaapKaur{" "}
        <a
          href="https://github.com/JhaapKaur/my-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source code
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
