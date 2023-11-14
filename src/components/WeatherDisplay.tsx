import WeatherDetails from "./WeatherDetails";
import HourlyTemperatureChart from "./HourlyTemperatureChart ";

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
          <div className="row mt-3">
            <div className="col">
              <h5>Air quality:</h5>
              <p>PM2.5: {actualData.current.air_quality.pm2_5} μg/m³</p>
              <p>PM10: {actualData.current.air_quality.pm10} μg/m³</p>
              <p>NO2: {actualData.current.air_quality.no2} ppb</p>
              <p>SO2: {actualData.current.air_quality.so2} ppb</p>
              <p>CO: {actualData.current.air_quality.co} ppm</p>
              <p>O3: {actualData.current.air_quality.o3} ppb</p>
              <p>US EPA Index: {actualData.current.air_quality["us-epa-index"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
