export const API_URI = process.env.REACT_APP_API_URI;
export const optionStatus = [
    { key: 'Queued', value: 'Queued', text: 'Queued' },
    { key: 'In Progress', value: 'In Progress', text: 'In Progress' },
    { key: 'Success', value: 'Success', text: 'Success' },
    { key: 'Failure', value: 'Failure', text: 'Failure' },
]

export const ROUTE = {
    CarsDashboard: '/admin',
    UsersDashboard: '/admin/users',
    CarsAvailability: '/admin/availability',
    SubmitScan: '/admin/new',
    SubmitUser: '/admin/user-new',
}