export interface Goal {
  description: string;
  expectedOutcome?: string;
  planTimelineSchedule?: number[];
};

export interface BMP {
  name: string;
  unit?: string;
  unitCount?: number;
  unitCost?: number;
  totalCost?: number;
};

export interface Summary {
  totalGoals: number;
  totalBMPs: number;
  completionRate: number;
};

export interface Implementation {
  activity: string;
  implementationTimelineSchedule?: number[];
};

export interface Monitoring {
  parameter: string;
  threshold: string;
};

export interface Outreach {
  activity: string;
  audience?: string;
};

export interface GeographicalArea {
  name: string;
  type?: string;
};

interface ExtractReportResult {
  fileName: string,
  summary: Summary;
  goals: Array<Goal>;
  bmps: Array<BMP>;
  implementation: Array<Implementation>;
  monitoring: Array<Monitoring>;
  outreach: Array<Outreach>;
  geographicAreas: Array<GeographicalArea>;
}

export default ExtractReportResult;