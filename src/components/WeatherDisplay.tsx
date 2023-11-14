type WeatherDisplayProps = {
  data: {
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
};

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  if (!data) {
    return <div className="weather-display">Aucune donnée disponible</div>;
  }

  return (
    <div className="container weather-display mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">
            {data.location.name}, {data.location.region}, {data.location.country}
          </h2>
          <p className="card-text">Local Time: {data.location.localtime}</p>
          <div className="row">
            <div className="col-md-6">
              <p>
                Temperature: {data.current.temp_c}°C / {data.current.temp_f}°F
              </p>
              <p>Condition: {data.current.condition.text}</p>
              <img src={data.current.condition.icon} alt={data.current.condition.text} className="img-fluid" />
            </div>
            <div className="col-md-6">
              <p>
                Wind: {data.current.wind_kph} km/h / {data.current.wind_mph} mph
              </p>
              <p>Humidity: {data.current.humidity}%</p>
              <p>
                Feels Like: {data.current.feelslike_c}°C / {data.current.feelslike_f}°F
              </p>
              <p>UV Index: {data.current.uv}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col">
              <h5>Qualité de l'air:</h5>
              <p>PM2.5: {data.current.air_quality.pm2_5} μg/m³</p>
              <p>PM10: {data.current.air_quality.pm10} μg/m³</p>
              <p>NO2: {data.current.air_quality.no2} ppb</p>
              <p>SO2: {data.current.air_quality.so2} ppb</p>
              <p>CO: {data.current.air_quality.co} ppm</p>
              <p>O3: {data.current.air_quality.o3} ppb</p>
              <p>US EPA Index: {data.current.air_quality["us-epa-index"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
