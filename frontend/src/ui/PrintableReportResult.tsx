

'use client';

import ExtractReportResult from "@/interfaces/ExtractReportResult";
import SummaryTab from "./tabs/SummaryTab";
import GoalsTab from "./tabs/GoalsTab";
import BMPsTab from "./tabs/BMPsTab";
import ImplementationTab from "./tabs/ImplementationTab";
import OutreachTab from "./tabs/OutreachTab";
import MonitoringTab from "./tabs/MonitoringTab";
import GeographicAreasTab from "./tabs/GeographicAreasTab";

type PrintableReportResultProps = {
  result: ExtractReportResult
};

export default function PrintableReportResult({ result } : PrintableReportResultProps) {
  return (
    <div className="my-15">
      <div className="my-10 border-b border-gray-200 dark:border-gray-700 text-left">
        <div className="break-after-page">
          <div className="my-10 text-bold text-xl"> Summary </div>
          <SummaryTab summary={result.summary} overview={result.overview} />
        </div>
        <div className="mt-10 text-bold text-xl"> Goals </div>
        <GoalsTab goals={result.goals} />
        <div className="my-10 text-bold text-xl"> Best Management Practices </div>
        <BMPsTab bmps={result.bmps} />
        <div className="my-10 text-bold text-xl"> Implementation Activities </div>
        <ImplementationTab implementation={result.implementation} />
        <div className="my-10 text-bold text-xl"> Monitoring Activities </div>
        <MonitoringTab activities={result.monitoring} />
        <div className="my-10 text-bold text-xl"> Outreach Activities </div>
        <OutreachTab activities={result.outreach} />
        <div className="my-10 text-bold text-xl"> Geographic Areas </div>
        <GeographicAreasTab geographicAreas={result.geographicAreas} />
      </div>
    </div>
  )
};
