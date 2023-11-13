type WeatherDisplayProps = {
  search: string;
};

export default function WeatherDisplay({ search }: WeatherDisplayProps) {
  return (
    <div className="weather-display">
      <h2>Weather Display: {search}</h2>
    </div>
  );
}
