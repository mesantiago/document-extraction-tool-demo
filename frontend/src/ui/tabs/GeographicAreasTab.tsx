import { GeographicalArea } from '@/interfaces/ExtractReportResult';
import GeographicAreaTable from '../charts/GeographicAreasTable';

type GeographicAreasTabProps = {
  geographicAreas: GeographicalArea[]
};

const GeographicAreasTab = ({ geographicAreas }: GeographicAreasTabProps) => {
  return <div className="text-sm">
    <p className="font-bold text-center my-5">Geographic Areas</p>
    <GeographicAreaTable geographicAreas={geographicAreas} />
  </div>;
};

export default GeographicAreasTab;