import { Goal } from '@/interfaces/ExtractReportResult';

type GoalsTableProps = {
  goals: Goal[]
};

export default function GoalsTable ({ goals }: GoalsTableProps) {
  return <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-800 border border-gray-200 shadow-md rounded-md">
      <thead className="bg-gray-100 text-xs uppercase tracking-wider">
        <tr>
          <th className="px-4 py-2 border">Goal Description</th>
          <th className="px-4 py-2 border">Expected Outcome</th>
          <th className="px-4 py-2 border">Probable Completion Date</th>
        </tr>
      </thead>
      <tbody>
        {goals.map((goal, index) => {
          const [start, end] = goal.planTimelineSchedule || [];
          return (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{goal.description}</td>
              <td className="px-4 py-2 border">{goal.expectedOutcome}</td>
              <td className="px-4 py-2 border">{start && end ? `Months ${start}-${end}` : ''}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>;
};
