import { useState, useEffect } from "react";
import axios from "axios";

import WeatherDisplay from "./components/WeatherDisplay";
import PrevisionDisplay from "./components/PrevisionDisplay";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import LoadingSpinner from "./components/LoadingSpinner";
import ThemeSwitcher from "./components/ThemeSwitcher";

const SEARCH_STORAGE_KEY = "search";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [search, setSearch] = useState<string>(() => {
    const storedSearch = localStorage.getItem(SEARCH_STORAGE_KEY);
    return storedSearch !== null ? storedSearch : "Paris";
  });
  const [weatherData, setWeatherData] = useState<any>(null);
  const [hourlyData, setHourlyData] = useState<any>(null);
  const [previsionData, setPrevisionData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string>("");

  useEffect(() => {
    localStorage.setItem(SEARCH_STORAGE_KEY, search);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      if (search.length >= 3) {
        setIsLoading(true);
        const searchApiUrl = "https://api.weatherapi.com/v1/search.json?key=";
        const weatherApiUrl = "https://api.weatherapi.com/v1/current.json?key=";
        const previsionApiUrl = "https://api.weatherapi.com/v1/forecast.json?key=";
        const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

        try {
          const searchResponse = await axios.get(searchApiUrl + weatherApiKey + "&q=" + search);
          if (searchResponse.data.length > 0) {
            localStorage.setItem(SEARCH_STORAGE_KEY, search);

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
          }
        } catch (error: any) {
          console.log(error.response.data.error.message);
        }

        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? "dark" : "light"}`}>
      <div className="flex justify-center items-center flex-col p-3 bg-primary">
        <Header />
        <ThemeSwitcher toggleTheme={toggleTheme} isDarkMode={isDarkTheme} />                                    
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
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header bg-secondary p-4 rounded">
      <h1 className="text-center text-4xl font-bold text-primary mb-4">Weather App</h1>
      <p className="text-center text-lg text-primary">
        Your go-to weather information application!
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer bg-secondary p-4 mt-8 rounded">
      <p className="text-center text-lg text-primary">
        © {new Date().getFullYear()} Weather App. All rights reserved.
      </p>
    </div>
  );
}