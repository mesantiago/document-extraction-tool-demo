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

export interface ImplementationActivity {
  activity: string;
  timeline?: number[];
};

export interface MonitoringActivity {
  parameter: string;
  threshold?: string;
  notes?: string;
};

export interface OutreachActivities {
  activity: string;
  audience?: string;
  deliveryMethod?: string;
};

export interface GeographicalArea {
  name: string;
  type?: string;
  priorityLevel?: string;
  notes?: string;
};

interface ExtractReportResult {
  fileName: string,
  overview: string,
  summary: Summary;
  goals: Array<Goal>;
  bmps: Array<BMP>;
  implementation: Array<ImplementationActivity>;
  monitoring: Array<MonitoringActivity>;
  outreach: Array<OutreachActivities>;
  geographicAreas: Array<GeographicalArea>;
}

export default ExtractReportResult;