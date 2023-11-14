import { useState, useEffect } from "react";
import axios from "axios";

import WeatherDisplay from "./components/WeatherDisplay";
import PrevisionDisplay from "./components/PrevisionDisplay";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";

export default function App() {
  const [search, setSearch] = useState<string>("");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [hourlyData, setHourlyData] = useState<any>(null);
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
          const previsionResponse = await axios.get(previsionApiUrl + weatherApiKey + "&q=" + search + "&days=1&aqi=yes&alerts=yes");
          setHourlyData(previsionResponse.data);
          setApiError("");
        } catch (error: any) {
          setApiError(error.response.data.error.message);
          setHourlyData(null);
        }

        try {
          const previsionResponse = await axios.get(previsionApiUrl + weatherApiKey + "&q=" + search + "&days=8&aqi=yes&alerts=yes");
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
      {apiError && <ErrorMessage message={apiError} />}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <WeatherDisplay actualData={weatherData} hourlyData={hourlyData} />
          <PrevisionDisplay data={previsionData} />
        </>
      )}
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1 className="text-center mb-4">Weather App</h1>
    </div>
  );
}