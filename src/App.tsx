import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="App container-xl">
      <Header />
      <WeatherDisplay />
      <SearchBar />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Weather App</h1>
    </div>
  );
}

function WeatherDisplay() {
  return (
    <div className="weather-display">
      <h2>Weather Display</h2>
    </div>
  );
}
