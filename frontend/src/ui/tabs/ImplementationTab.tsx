import { ImplementationActivity } from '@/interfaces/ExtractReportResult';
import ImplementationTimelineChart from '../charts/ImplementationTimelineChart';
import ImplementationActivitiesTable from '../charts/ImplementationActivitiesTable';

type ImplementationTabProps = {
  implementation: ImplementationActivity[]
};

const ImplementationTab = ({ implementation }: ImplementationTabProps) => {
  return <div className="flex flex-col text-sm">
    <div className="my-5 text-center">
      <ImplementationTimelineChart activities={implementation} />
    </div>
    <div>
      <p className="font-bold text-center my-5">Implementation Activities</p>
      <ImplementationActivitiesTable activities={implementation} />
    </div>
  </div>;
};

export default ImplementationTab;