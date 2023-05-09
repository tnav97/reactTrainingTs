/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TimesheetDocument = {
    id?: number;
    timesheetId?: number;
    ownerId?: number;
    seekerId?: number;
    projectId?: number;
    name?: string;
    type?: string;
    data?: Array<string>;
    size?: number;
};
