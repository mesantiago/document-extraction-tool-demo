import { OutreachActivities } from '@/interfaces/ExtractReportResult';
import OutreachActivitiesTable from '../charts/OutreachActivitiesTable';

type OutreachTabProps = {
  activities: OutreachActivities[]
};

const OutreachTab = ({ activities }: OutreachTabProps) => {
  return <div className="text-sm">
    <p className="font-bold text-center my-5">Outreach Activities</p>
    <OutreachActivitiesTable activities={activities} />
  </div>;
};

export default OutreachTab;