import CompletionRateChart from "@/ui/charts/CompletionRateChart";
import TotalChart from "@/ui/charts/TotalChart";
import { Summary } from '@/interfaces/ExtractReportResult';

type SummaryTabProps = {
  summary: Summary,
  overview: string
};

const SummaryTab = ({ summary, overview }: SummaryTabProps) => {
  return <div className="flex flex-col md:flex-row text-sm">
    <div className="md:grow my-5 px-5">
      <p className="font-bold text-center">Overview</p>
      <p className="text-gray-500 text-justify">{ overview || '' }</p>
    </div>
    <div className="flex flex-col text-center">
      <div className="my-5 max-h-50 mx-auto">
        <TotalChart goals={summary.totalGoals} bmps={summary.totalBMPs}></TotalChart>
      </div>
      <div className="my-5 max-h-50 mx-auto">
        <CompletionRateChart completionRate={summary.completionRate}></CompletionRateChart>
      </div>
    </div>
  </div>;
};

export default SummaryTab;