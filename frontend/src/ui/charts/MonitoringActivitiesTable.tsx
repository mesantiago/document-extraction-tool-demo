import { MonitoringActivity } from '@/interfaces/ExtractReportResult';

type MonitoringActivitiesTableProps = {
  activities: MonitoringActivity[]
};

export default function MonitoringActivitiesTable ({ activities }: MonitoringActivitiesTableProps) {
  return <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-800 border border-gray-200 shadow-md rounded-md">
      <thead className="bg-gray-100 text-xs uppercase tracking-wider">
        <tr>
          <th className="px-4 py-2 border">Monitoring Parameter</th>
          <th className="px-4 py-2 border">Treshold</th>
          <th className="px-4 py-2 border">Notes</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
            <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{activity.parameter}</td>
            <td className="px-4 py-2 border">{activity.threshold || ''}</td>
            <td className="px-4 py-2 border">{activity.notes || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
};
