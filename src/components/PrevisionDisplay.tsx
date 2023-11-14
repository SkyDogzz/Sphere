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
      }[];
    };
  };
};

export default function PrevisionDisplay({ data }: PrevisionDisplayProps) {
  return (
    <div className="prevision-display">
      {data && (
        <>
          <h2>{data.location.name}</h2>
          {data.forecast.forecastday.map((day: any) => {
            return (
              <div className="day" key={day.date}>
                <p>{day.date}</p>
                <p>{day.day.condition.text}</p>
                <p>
                  {day.day.avgtemp_c}°C / {day.day.avgtemp_f}°F
                </p>
                <p>
                  {day.day.avgvis_km} km / {day.day.avgvis_miles} miles
                </p>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
