import WeatherDetails from "./WeatherDetails";
import HourlyTemperatureChart from "./HourlyTemperatureChart ";
import AirQualityDetails from "./AirQualityDetails";

export type WeatherDisplayProps = {
  actualData: {
    location: {
      name: string;
      country: string;
      region: string;
      localtime: string;
    };
    current: {
      condition: {
        text: string;
        icon: string;
      };
      temp_c: number;
      temp_f: number;
      wind_kph: number;
      wind_mph: number;
      humidity: number;
      feelslike_c: number;
      feelslike_f: number;
      uv: number;
      air_quality: {
        pm2_5: number;
        pm10: number;
        no2: number;
        so2: number;
        co: number;
        o3: number;
        "us-epa-index": number;
      };
    };
  };
  hourlyData: {
    forecast: {
      forecastday: {
        hour: {
          temp_c: number;
          temp_f: number;
        }[];
      }[];
    };
  };
};

export default function WeatherDisplay({ actualData, hourlyData }: WeatherDisplayProps) {
  if (!actualData || !hourlyData) {
    return <div className="weather-display">Aucune donnée disponible</div>;
  }

  return (
    <div className="container weather-display mt-4">
      <h1>Weather Display</h1>
      <div className="card">
        <div className="card-body">
          <WeatherDetails actualData={actualData} />
          <HourlyTemperatureChart hourlyData={hourlyData} />
          <AirQualityDetails airQualityData={actualData.current.air_quality} />
        </div>
      </div>
    </div>
  );
}
