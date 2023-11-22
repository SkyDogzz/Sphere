import { WeatherDisplayProps } from "./WeatherDisplay";

type WeatherDetailsProps = {
  actualData: WeatherDisplayProps["actualData"];
};

export default function WeatherDetails({ actualData }: WeatherDetailsProps) {
  return (
    <>
      <div className="card-body">
        <h2 className="card-title text-3xl font-semibold mb-2">
          {actualData.location.name}, {actualData.location.region}, {actualData.location.country}
        </h2>
        <p className="card-text">Local Time: {actualData.location.localtime}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-3 border rounded bg-light">
            <p className="text-lg">
              Temperature: <span className="font-semibold">{actualData.current.temp_c}°C / {actualData.current.temp_f}°F</span>
            </p>
            <p className="text-lg">
              Condition: <span className="font-semibold">{actualData.current.condition.text}</span>
            </p>
            <img src={actualData.current.condition.icon} alt={actualData.current.condition.text} className="img-fluid" />
          </div>
          <div className="p-3 border rounded bg-light">
            <p className="text-lg">
              Wind: <span className="font-semibold">{actualData.current.wind_kph} km/h / {actualData.current.wind_mph} mph</span>
            </p>
            <p className="text-lg">
              Humidity: <span className="font-semibold">{actualData.current.humidity}%</span>
            </p>
            <p className="text-lg">
              Feels Like: <span className="font-semibold">{actualData.current.feelslike_c}°C / {actualData.current.feelslike_f}°F</span>
            </p>
            <p className="text-lg">
              UV Index: <span className="font-semibold">{actualData.current.uv}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}