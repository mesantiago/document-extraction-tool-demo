import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type TotalChartProps = {
  goals: number,
  bmps: number
};

export default function TotalChart ({ goals, bmps } : TotalChartProps) {
  const data = {
    labels: [`Goals: ${goals}`, `BMPs: ${bmps}`],
    datasets: [{
      label: 'Total Count',
      data: [goals, bmps],
      backgroundColor: ['mediumpurple', 'mediumorchid'],
      borderWidth: 1
    }]
  };

  const options = {
    plugins:{
      legend: {
        display: false
      },
      title: {
        display: true,
        text: `Summary`,
      }
    }
  };

  return <Bar data={data} options={options} />;
};