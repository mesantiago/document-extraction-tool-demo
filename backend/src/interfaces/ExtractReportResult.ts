interface ExtractReportResult {
  overview: string,
  summary: {
    totalGoals: number;
    totalBMPs: number;
    completionRate: number;
  };
  goals: Array<{
    description: string;
    expectedOutcome?: string;
    planTimelineSchedule?: number[];
  }>;
  bmps: Array<{
    name: string;
    unit?: string;
    unitCount?: number;
    unitCost?: number;
    totalCost?: number;
  }>;
  implementation: Array<{
    activity: string;
    implementationTimelineSchedule?: number[];
  }>;
  monitoring: Array<{
    parameter: string;
    threshold: string;
  }>;
  outreach: Array<{
    activity: string;
    audience?: string;
  }>;
  geographicAreas: Array<{
    name: string;
    type?: string;
  }>;
}

export default ExtractReportResult;