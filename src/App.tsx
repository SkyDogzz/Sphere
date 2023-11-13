import { useState } from "react";

import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className="App container-xl">
      <Header />
      <WeatherDisplay search={search} />
      <SearchBar search={search} setSearch={setSearch} />
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
