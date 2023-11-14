import { WeatherDisplayProps } from "./WeatherDisplay";

type WeatherDetailsProps = {
  actualData: WeatherDisplayProps["actualData"];
};

export default function WeatherDetails({ actualData }: WeatherDetailsProps) {
  return (
    <>
      <div className="card-body">
        <h2 className="card-title">
          {actualData.location.name}, {actualData.location.region}, {actualData.location.country}
        </h2>
        <p className="card-text">Local Time: {actualData.location.localtime}</p>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="p-3 border rounded bg-light">
              <p>
                Temperature:{" "}
                <span className="fw-bold">
                  {actualData.current.temp_c}°C / {actualData.current.temp_f}°F
                </span>
              </p>
              <p>
                Condition: <span className="fw-bold">{actualData.current.condition.text}</span>
              </p>
              <img src={actualData.current.condition.icon} alt={actualData.current.condition.text} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded bg-light">
              <p>
                Wind:{" "}
                <span className="fw-bold">
                  {actualData.current.wind_kph} km/h / {actualData.current.wind_mph} mph
                </span>
              </p>
              <p>
                Humidity: <span className="fw-bold">{actualData.current.humidity}%</span>
              </p>
              <p>
                Feels Like:{" "}
                <span className="fw-bold">
                  {actualData.current.feelslike_c}°C / {actualData.current.feelslike_f}°F
                </span>
              </p>
              <p>
                UV Index: <span className="fw-bold">{actualData.current.uv}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
