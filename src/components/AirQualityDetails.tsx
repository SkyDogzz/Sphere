import { WeatherDisplayProps } from "./WeatherDisplay";

type AirQualityDetailsProps = {
  airQualityData: WeatherDisplayProps["actualData"]["current"]["air_quality"];
};

export default function AirQualityDetails({ airQualityData }: AirQualityDetailsProps) {
  return (
    <div className="row mt-3">
      <div className="col">
        <h5 className="mb-3">Air Quality:</h5>
        <div className="p-3 border rounded bg-light">
          <p className="mb-2">
            PM2.5: <span className="fw-bold">{airQualityData.pm2_5} μg/m³</span>
          </p>
          <p className="mb-2">
            PM10: <span className="fw-bold">{airQualityData.pm10} μg/m³</span>
          </p>
          <p className="mb-2">
            NO2: <span className="fw-bold">{airQualityData.no2} ppb</span>
          </p>
          <p className="mb-2">
            SO2: <span className="fw-bold">{airQualityData.so2} ppb</span>
          </p>
          <p className="mb-2">
            CO: <span className="fw-bold">{airQualityData.co} ppm</span>
          </p>
          <p className="mb-2">
            O3: <span className="fw-bold">{airQualityData.o3} ppb</span>
          </p>
          <p>
            US EPA Index: <span className="fw-bold">{airQualityData["us-epa-index"]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
