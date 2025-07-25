
import { BMP } from "@/interfaces/ExtractReportResult";
import BMPCostPieChart from "@/ui/charts/BMPsCostChart";
import BMPsCostTable from "@/ui/charts/BMPsCostTable";

type BMPsTabProps = {
  bmps: BMP[]
};

const BMPsTab = ({ bmps }: BMPsTabProps) => {
  const hasCostData: boolean = !!bmps.find(b => b.totalCost);
  return <div className="flex flex-col text-sm">
    {hasCostData ? <div className="my-5 mx-auto h-80 w-full">
      <BMPCostPieChart bmps={bmps}/>
    </div>: null}
    <div>
      <p className="font-bold text-center my-5">Best Management Practices</p>
      <BMPsCostTable bmps={bmps} />
    </div>
  </div>;
};

export default BMPsTab;