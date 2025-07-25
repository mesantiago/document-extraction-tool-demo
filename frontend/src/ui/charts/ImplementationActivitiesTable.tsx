import { ImplementationActivity } from '@/interfaces/ExtractReportResult';

type ImplementationActivitysTableProps = {
  activities: ImplementationActivity[]
};

export default function ImplementationActivitysTable ({ activities }: ImplementationActivitysTableProps) {
  return <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-800 border border-gray-200 shadow-md rounded-md">
      <thead className="bg-gray-100 text-xs uppercase tracking-wider">
        <tr>
          <th className="px-4 py-2 border">Activity</th>
          <th className="px-4 py-2 border">Implementation Schedule</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => {
          let [start, end] = activity.timeline || [];
          if (!start && end) start = end;
          if (!end && start) end = start;
          return (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{activity.activity}</td>
              <td className="px-4 py-2 border">{start || end ? (start === end ? `Month ${start}` : `Months ${start}-${end}`) : ''}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>;
};
