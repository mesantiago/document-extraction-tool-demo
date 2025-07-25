import { BMP } from "@/interfaces/ExtractReportResult";

type BMPsCostTableProps = {
  bmps: BMP[]
}

const BMPsCostTable = ({ bmps }: BMPsCostTableProps) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border text-sm text-gray-700">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 border">BMP</th>
          <th className="px-4 py-2 border">Quantity</th>
          <th className="px-4 py-2 border">Unit Cost</th>
          <th className="px-4 py-2 border">Total Cost</th>
        </tr>
      </thead>
      <tbody>
        {bmps.map((bmp, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            <td className="px-4 py-2 border">{bmp.name}</td>
            <td className="px-4 py-2 border">{bmp.unitCount || '-'} {bmp.unitCount && bmp.unit || ''}</td>
            <td className="px-4 py-2 border">{bmp.unitCost?.toFixed(2) || '-'}</td>
            <td className="px-4 py-2 border">{bmp.totalCost?.toLocaleString() || '-'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BMPsCostTable;