import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="Tehran" />
        <footer>
          This project is{" "}
          <a
            href="https://github.com/ShivaSalehnia/weather-app"
            target="_blank"
            rel="noreferrer"
            className="openSourceLink"
          >
            open sourced
          </a>{" "}
          by Shiva Salehnia
        </footer>
      </div>
    </div>
  );
}

export default App;
