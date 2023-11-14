import { useState, useEffect } from "react";
import axios from "axios";

import WeatherDisplay from "./components/WeatherDisplay";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (search.length >= 3) {
        setIsLoading(true);
        const weatherApiUrl = "https://api.weatherapi.com/v1/current.json?key=";
        const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

        try {
          const response = await axios.get(weatherApiUrl + weatherApiKey + "&q=" + search + "&aqi=yes");
          setData(response.data);
        } catch (error: any) {
          setApiError(error.response.data.error.message);
          setData(null);
        }
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div className="App container-xl">
      <Header />
      {apiError && <p className="error-message">{apiError}</p>}
      {isLoading ? <LoadingSpinner /> : <WeatherDisplay data={data} />}
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

function LoadingSpinner() {
  return <div className="loading-spinner">Chargement...</div>;
}
