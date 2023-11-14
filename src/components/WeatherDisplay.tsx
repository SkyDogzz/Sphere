import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type WeatherDisplayProps = {
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

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const temperaturesC = hourlyData.forecast.forecastday[0].hour.map((hourData) => hourData.temp_c);
  const temperaturesF = hourlyData.forecast.forecastday[0].hour.map((hourData) => hourData.temp_f);

  const options = {
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
      },
    },
  };
  
  const data = {
    labels: hours,
    datasets: [
      {
        label: 'Temperature in °C',
        data: temperaturesC,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        yAxisID: 'y',
      },
      {
        label: 'Temperature in °F',
        data: temperaturesF,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        yAxisID: 'y1',
      },
    ],
  };
  

  return (
    <div className="container weather-display mt-4">
      <h1>Weather Display</h1>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            {actualData.location.name}, {actualData.location.region}, {actualData.location.country}
          </h2>
          <p className="card-text">Local Time: {actualData.location.localtime}</p>
          <div className="row">
            <div className="col-md-6">
              <p>
                Temperature: {actualData.current.temp_c}°C / {actualData.current.temp_f}°F
              </p>
              <p>Condition: {actualData.current.condition.text}</p>
              <img src={actualData.current.condition.icon} alt={actualData.current.condition.text} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p>
                Wind: {actualData.current.wind_kph} km/h / {actualData.current.wind_mph} mph
              </p>
              <p>Humidity: {actualData.current.humidity}%</p>
              <p>
                Feels Like: {actualData.current.feelslike_c}°C / {actualData.current.feelslike_f}°F
              </p>
              <p>UV Index: {actualData.current.uv}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5>Temperature by Hour</h5>
              <Line data={data} options={options} />
            </div>
          </div>
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
