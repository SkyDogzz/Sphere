import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type HourlyTemperatureChartProps = {
  hourlyData: {
    hour: {
      temp_c: number;
      temp_f: number;
    }[];
  };
};

export default function HourlyTemperatureChart({ hourlyData }: HourlyTemperatureChartProps) {
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const temperaturesC = hourlyData.hour.map((hourData) => hourData.temp_c);
  const temperaturesF = hourlyData.hour.map((hourData) => hourData.temp_f);

  const options = {
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
      },
    },
  };

  const data = {
    labels: hours,
    datasets: [
      {
        label: "Temperature in °C",
        data: temperaturesC,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
        yAxisID: "y",
      },
      {
        label: "Temperature in °F",
        data: temperaturesF,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div className="row mt-3">
      <div className="col">
        <h5>Temperature by Hour</h5>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
