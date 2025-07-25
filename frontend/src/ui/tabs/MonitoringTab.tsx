import { MonitoringActivity } from '@/interfaces/ExtractReportResult';
import MonitoringActivitiesTable from '../charts/MonitoringActivitiesTable';

type MonitoringTabProps = {
  activities: MonitoringActivity[]
};

const MonitoringTab = ({ activities }: MonitoringTabProps) => {
  return <div className="text-sm">
    <p className="font-bold text-center my-5">Monitoring Activities</p>
    <MonitoringActivitiesTable activities={activities} />
  </div>;
};

export default MonitoringTab;