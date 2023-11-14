import { WeatherDisplayProps } from "./WeatherDisplay";

type WeatherDetailsProps = {
  actualData: WeatherDisplayProps["actualData"];
};

export default function WeatherDetails({ actualData }: WeatherDetailsProps) {
  return (
    <>
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
    </>
  );
}
