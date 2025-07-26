import { Goal } from '@/interfaces/ExtractReportResult';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
  TooltipItem
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

type GoalsTimelineChartProps = {
  goals: Goal[]
};

export default function GoalsTimelineChart ({ goals }: GoalsTimelineChartProps) {
  let maxMonth = 1;
  const datasets = goals.map((goal, index) => {
    let [start, end] = goal.planTimelineSchedule || [];
    if (!start && end) start = end;
    if (!end && start) end = start;
    if (end > maxMonth) maxMonth = end;

    return {
      label: goal.description,
      data: [
        { x: start, y: index + 1 },
        { x: end, y: index + 1 },
      ],
      showLine: true,
      borderColor: `hsl(${index * 40}, 70%, 50%)`,
      backgroundColor: `hsl(${index * 40}, 70%, 50%)`,
      borderWidth: 10,
      pointRadius: 0,
    };
  });

  const data = {
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (ctx: TooltipItem<"scatter">) => `${ctx.dataset.label} (${ctx.raw})`,
        },
      },
      title: {
        display: true,
        text: 'Goal Timeline (Months)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
        min: 1,
        max: maxMonth,
        ticks: {
          stepSize: Math.min(Math.ceil(maxMonth/8), 6),
        },
      },
      y: {
        title: {
          display: true,
          text: 'Goals',
        },
        ticks: {
          stepSize: 1,
          callback: (_: string | number, index: number) => goals[index]?.description.slice(0, 30) || '' + (goals[index]?.description.length > 30 ? '...' : ''),
        },
        min: 1,
        max: goals.length,
      },
    },
  };

  return <Scatter data={data} options={options} />;
};
