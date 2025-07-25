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
    timeline?: number[];
  }>;
  monitoring: Array<{
    parameter: string;
    threshold?: string;
    notes?: string;
  }>;
  outreach: Array<{
    activity: string;
    audience?: string;
    deliveryMethod?: string;
  }>;
  geographicAreas: Array<{
    name: string;
    type?: string;
    priorityLevel?: string;
    notes?: string;
  }>;
}

export default ExtractReportResult;