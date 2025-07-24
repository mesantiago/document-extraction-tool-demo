

'use client';

import ExtractReportResult from "@/interfaces/ExtractReportResult";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import CompletionRateChart from "./charts/CompletionRateChart";
import TotalChart from "./charts/TotalChart";

type ReportResultProps = {
  result: ExtractReportResult
};

export default function ReportResult({ result } : ReportResultProps) {
  const [currentTab, setCurrentTab] = useState('summary');
  console.log(result);
  const tabs = [
    {id: 'summary', name: 'Summary'},
    {id: 'goals', name: 'Goals'},
    {id: 'bmps', name: 'BMPs'},
    {id: 'implementation', name: 'Implementation'},
    {id: 'monitoring', name: 'Monitoring'},
    {id: 'outreach', name: 'Outreach'},
    {id: 'geographicAreas', name: 'Geographical Areas'}
  ];
  return (
    <div className="my-15">
      <p className="text-sm font-semibold text-pretty text-gray-500 mx-5">
        <DocumentTextIcon className="size-6 inline align-bottom"></DocumentTextIcon> {result.fileName}
      </p>
      <div className="my-10 border-b border-gray-200 dark:border-gray-700 text-left">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map(tab => (<li key={tab.id} className="me-2">
              <a href="#"
                className={`inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group ${
                  currentTab === tab.id ?
                    'text-purple-600 border-purple-600 active dark:text-purple-500 dark:border-purple-500' :
                    'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                }`}
                onClick={() => setCurrentTab(tab.id)}>
                {tab.name}
              </a>
            </li>)
          )}
        </ul>
        { currentTab === 'summary' ? (
          <div className="flex flex-col md:flex-row text-sm">
            <div className="md:grow my-5">
              <p className="font-bold text-center">Overview</p>
              <p className="text-gray-500">Some text here</p>
            </div>
            <div className="flex flex-col text-center">
              <div className="md:max-w-3xs my-5">
                <p className="font-bold">Summary</p>
                <TotalChart goals={result.summary.totalGoals} bmps={result.summary.totalBMPs}></TotalChart>
              </div>
              <div className="md:max-w-3xs my-5">
                <p className="font-bold">Completion Rate: {result.summary.completionRate}</p>
                <CompletionRateChart completionRate={result.summary.completionRate}></CompletionRateChart>
              </div>
            </div>
            
          </div>
        ) : null}
      </div>
    </div>
  )
};
