
import GoalsTimelineChart from "@/ui/charts/GoalsTimelineChart";
import GoalsTable from "@/ui/charts/GoalsTable";
import { Goal } from '@/interfaces/ExtractReportResult';

type GoalsTabProps = {
  goals: Goal[]
};

const GoalsTab = ({ goals }: GoalsTabProps) => {
  return <div className="flex flex-col text-sm">
    <div className="my-5 text-center">
      <GoalsTimelineChart goals={goals} />
    </div>
    <div>
      <p className="font-bold text-center my-5">Goals</p>
      <GoalsTable goals={goals} />
    </div>
  </div>;
};

export default GoalsTab;