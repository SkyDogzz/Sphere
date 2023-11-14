import { useState, useEffect } from "react";
import axios from "axios";

import WeatherDisplay from "./components/WeatherDisplay";
import PrevisionDisplay from "./components/PrevisionDisplay";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [previsionData, setPrevisionData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      if (search.length >= 3) {
        setIsLoading(true);
        const weatherApiUrl = "https://api.weatherapi.com/v1/current.json?key=";
        const previsionApiUrl = "https://api.weatherapi.com/v1/forecast.json?key=";
        const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

        try {
          const weatherResponse = await axios.get(weatherApiUrl + weatherApiKey + "&q=" + search + "&aqi=yes");
          setWeatherData(weatherResponse.data);
          setApiError("");
        } catch (error: any) {
          setApiError(error.response.data.error.message);
          setWeatherData(null);
        }

        try {
          const previsionResponse = await axios.get(previsionApiUrl + weatherApiKey + "&q=" + search + "&days=7&aqi=yes&alerts=yes");
          setPrevisionData(previsionResponse.data);
          setApiError("");
        } catch (error: any) {
          setApiError(error.response.data.error.message);
          setPrevisionData(null);
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
      <SearchBar search={search} setSearch={setSearch} />
      {apiError && <p className="error-message">{apiError}</p>}
      {isLoading ? <LoadingSpinner /> : <WeatherDisplay data={weatherData} />}
      {isLoading ? <LoadingSpinner /> : <PrevisionDisplay data={previsionData} />}
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
