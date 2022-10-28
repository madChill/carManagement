export interface ILocation {
    path: string,
    positions: object,
}
export interface IFindings {
    findings: {
        type: string,
        ruleId: string,
        location: {
            path: string,
            positions: {
                begin: {
                    line: number
                }
            },
        },
        metadata: {
            description: string,
            severity: string,
        }
    }[]
}
export type Status = "Queued" | "In Progress" | "Success" | "Failure" | null;
export interface IScanItem {
    id?: string | number,
    Status?: Status
    RepositoryName: string,
    Findings: IFindings,
    QueuedAt: Date | string,
    ScanningAt: Date | string,
    FinishedAt: Date | string,
}

export interface IScanItemCreate {
    Id?: string | number,
    Status?: Status
    RepositoryName: string,
    Findings: string,
    QueuedAt: Date | string,
    ScanningAt: Date | string,
    FinishedAt: Date | string,
}