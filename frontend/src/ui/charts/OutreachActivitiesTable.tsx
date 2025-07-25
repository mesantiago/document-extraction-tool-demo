import { OutreachActivities } from '@/interfaces/ExtractReportResult';

type OutreachActivitiesTableProps = {
  activities: OutreachActivities[]
};

export default function OutreachActivitiesTable ({ activities }: OutreachActivitiesTableProps) {
  return <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-800 border border-gray-200 shadow-md rounded-md">
      <thead className="bg-gray-100 text-xs uppercase tracking-wider">
        <tr>
          <th className="px-4 py-2 border">Activity</th>
          <th className="px-4 py-2 border">Target Audience</th>
          <th className="px-4 py-2 border">Delivery Method</th>
        </tr>
      </thead>
      <tbody>
        {activities.map((activity, index) => (
            <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{activity.activity}</td>
            <td className="px-4 py-2 border">{activity.audience || ''}</td>
            <td className="px-4 py-2 border">{activity.deliveryMethod || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
};
