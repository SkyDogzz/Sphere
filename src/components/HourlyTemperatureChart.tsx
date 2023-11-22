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
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
      y1: {
        type: "linear" as const,
        display: true,
        position: "right" as const,
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
      },
    },plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Temperature by Hour" as const,
        font: {
          size: 16,
        },
      },
    },
  };


  const data = {
    labels: hours,
    datasets: [
      {
        label: 'Temperature in °C',
        data: temperaturesC,
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.1)',
        yAxisID: 'y',
      },
      {
        label: 'Temperature in °F',
        data: temperaturesF,
        borderColor: 'red',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        yAxisID: 'y1',
      },
    ],
  };

  return (
    <div className="row mt-3">
      <div className="col">
        <div className="card">
          <div className="card-header bg-blue-500 text-white">
            <h5 className="text-2xl font-semibold">Temperature by Hour</h5>
          </div>
          <div className="card-body">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}