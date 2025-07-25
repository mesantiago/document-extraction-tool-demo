
import { BMP } from "@/interfaces/ExtractReportResult";
import BMPCostPieChart from "@/ui/charts/BMPsCostChart";
import BMPsCostTable from "@/ui/charts/BMPsCostTable";

type BMPsTabProps = {
  bmps: BMP[]
};

const BMPsTab = ({ bmps }: BMPsTabProps) => {
  return <div className="flex flex-col text-sm">
    <div className="my-5 mx-auto max-w-xl h-70 w-full">
      <BMPCostPieChart bmps={bmps}/>
    </div>
    <div>
      <p className="font-bold text-center my-5">Best Management Practices</p>
      <BMPsCostTable bmps={bmps} />
    </div>
  </div>;
};

export default BMPsTab;