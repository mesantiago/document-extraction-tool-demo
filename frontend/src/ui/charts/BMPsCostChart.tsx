import { BMP } from '@/interfaces/ExtractReportResult';
import { Pie } from 'react-chartjs-2';

type BMPCostPieChartProps = {
  bmps: BMP[]
};

const BMPCostPieChart = ({ bmps }: BMPCostPieChartProps) => {
  const labels = bmps.map(b => b.name);
  const data = {
    labels,
    datasets: [
      {
        label: 'Total Cost',
        data: bmps.map(b => b.totalCost),
        backgroundColor: labels.map((_, i) => `hsl(${i * 60}, 70%, 60%)`),
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          padding: 20,
        },
      },
      title: {
        display: true,
        text: `Best Management Practices Costs`,
      }
    }
  };

  return <Pie data={data} options={options}/>;
};

export default BMPCostPieChart;