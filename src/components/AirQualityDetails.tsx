import { WeatherDisplayProps } from "./WeatherDisplay";

type AirQualityDetailsProps = {
  airQualityData: WeatherDisplayProps["actualData"]["current"]["air_quality"];
};

export default function AirQualityDetails({ airQualityData }: AirQualityDetailsProps) {
  return (
    <div className="row mt-3">
      <div className="col">
        <h5>Air quality:</h5>
        <p>PM2.5: {airQualityData.pm2_5} μg/m³</p>
        <p>PM10: {airQualityData.pm10} μg/m³</p>
        <p>NO2: {airQualityData.no2} ppb</p>
        <p>SO2: {airQualityData.so2} ppb</p>
        <p>CO: {airQualityData.co} ppm</p>
        <p>O3: {airQualityData.o3} ppb</p>
        <p>US EPA Index: {airQualityData["us-epa-index"]}</p>
      </div>
    </div>
  );
}
