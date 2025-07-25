import { GeographicalArea } from '@/interfaces/ExtractReportResult';

type GeographicAreaTableProps = {
  geographicAreas: GeographicalArea[]
};

export default function GeographicAreaTable ({ geographicAreas }: GeographicAreaTableProps) {
  return <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-800 border border-gray-200 shadow-md rounded-md">
      <thead className="bg-gray-100 text-xs uppercase tracking-wider">
        <tr>
          <th className="px-4 py-2 border">Name</th>
          <th className="px-4 py-2 border">Type</th>
          <th className="px-4 py-2 border">Priority Level</th>
          <th className="px-4 py-2 border"></th>
        </tr>
      </thead>
      <tbody>
        {geographicAreas.map((area, index) => (
            <tr key={index} className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{area.name}</td>
            <td className="px-4 py-2 border">{area.type || ''}</td>
            <td className="px-4 py-2 border">{area.priorityLevel || ''}</td>
            <td className="px-4 py-2 border">{area.notes || ''}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
};
