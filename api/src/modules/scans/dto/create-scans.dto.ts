export interface ILocation {
  path: string;
  positions: object;
}
export interface IFindings {
  type: string;
  ruleId: string;
  location: ILocation;
}
export interface CreateScansResultDto {
  // Id?: string | number;
  Status: 'Queued' | 'In Progress' | 'Success' | 'Failure';
  RepositoryName: string;
  Findings: IFindings[];
  QueuedAt?: Date;
  ScanningAt?: Date;
  FinishedAt?: Date;
}
