import { useState } from "react";
import HourlyTemperatureChart from "./HourlyTemperatureChart";

type PrevisionDisplayProps = {
  data: {
    location: {
      name: string;
    };
    forecast: {
      forecastday: {
        day: {
          avgtemp_c: number;
          avgtemp_f: number;
          condition: {
            text: string;
          };
          avgvis_km: number;
          avgvis_miles: number;
        };
        date: string;
        hour: {
          temp_c: number;
          temp_f: number;
        }[];
      }[];
    };
  };
};

export default function PrevisionDisplay({ data }: PrevisionDisplayProps) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleDayClick = (dayIndex: number) => {
    setSelectedDay(dayIndex);
  };

  return (
    <div className="prevision-display">
      <h1>Prevision Display</h1>
      {data && (
        <>
          <h2>{data.location.name}</h2>
          <div className="day-buttons">
            {data.forecast.forecastday.slice(1).map((day, index) => (
              <button key={day.date} onClick={() => handleDayClick(index)}>
                {day.date}
              </button>
            ))}
          </div>
          {selectedDay !== null && <HourlyTemperatureChart hourlyData={data.forecast.forecastday[selectedDay]} />}
        </>
      )}
    </div>
  );
}
