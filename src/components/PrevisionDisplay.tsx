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
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const handleDayClick = (dayIndex: number) => {
    setSelectedDay(dayIndex);
  };
  return (
    <div className="prevision-display mt-3">
      <h1 className="text-center mb-4 text-3xl font-semibold">Prevision Display</h1>
      {data && (
        <>
          <h2 className="text-center mb-3 text-2xl font-semibold">{data.location.name}</h2>
          <div className="flex justify-center flex-wrap mb-3">
            {data.forecast.forecastday.slice(1).map((day, index) => (
              <button
                key={day.date}
                onClick={() => handleDayClick(index)}
                className={`btn ${
                  selectedDay === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                } m-1 py-2 px-4 rounded`}
              >
                {day.date}
              </button>
            ))}
          </div>
          {selectedDay !== null && (
            <div className="mt-4">
              <HourlyTemperatureChart hourlyData={data.forecast.forecastday[selectedDay]} />
            </div>
          )}
        </>
      )}
    </div>
  );
}