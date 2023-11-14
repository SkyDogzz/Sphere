type WeatherDisplayProps = {
  data: {
    location: {
      name: string;
    };
    current: {
      condition: {
        text: string;
      };
      temp_c: number;
      temp_f: number;
      wind_kph: number;
      wind_mph: number;
    };
  };
};

export default function WeatherDisplay({ data }: WeatherDisplayProps) {
  return (
    <div className="weather-display">
      {data && (
        <>
          <h2>{data.location.name}</h2>
          <p>{data.current.condition.text}</p>
          <p>
            {data.current.temp_c}°C / {data.current.temp_f}°F
          </p>
          <p>
            {data.current.wind_kph} km/h / {data.current.wind_mph} mph
          </p>
        </>
      )}
    </div>
  );
}
