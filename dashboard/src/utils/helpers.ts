import { IScanItem } from './types/scanItem';
export const timeStampPredict = (item: IScanItem): (string | Date) => {
    if (item.Status === "Queued") return item.QueuedAt
    if (item.Status === "Success") return item.FinishedAt
    if (item.Status === "In Progress") return item.ScanningAt
    if (item.Status === "Failure") return item.FinishedAt
    return item.QueuedAt
}
export const countFinding = (item: IScanItem): number => {
    return item.Findings.findings? item.Findings.findings.length : 0
}