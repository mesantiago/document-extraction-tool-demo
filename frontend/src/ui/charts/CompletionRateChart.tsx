import { Doughnut } from 'react-chartjs-2';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

type CompletionRateChartProps = {
  completionRate: number
};

export default function CompletionRateChart ({ completionRate } : CompletionRateChartProps) {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [completionRate, 100 - completionRate],
        backgroundColor: ['mediumpurple', 'lightgray'],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} />;
};