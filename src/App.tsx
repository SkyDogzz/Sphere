import { useState, useEffect } from "react";
import axios from "axios";

import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (search.length >= 3) {
        const weatherApiUrl = "https://api.weatherapi.com/v1/current.json?key=";
        const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

        try {
          const response = await axios.get(weatherApiUrl + weatherApiKey + "&q=" + search + "&aqi=yes");
          if (response.data.location.name === data.location.name) return;
          setData(response.data);
        } catch (error: any) {
          if (error.response) console.error("Error " + error.response.data.error.code + ": " + error.response.data.error.message);
        }
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="App container-xl">
      <Header />
      <WeatherDisplay data={data} />
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
