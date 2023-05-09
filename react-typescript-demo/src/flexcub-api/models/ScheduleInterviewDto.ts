/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTime } from './LocalTime';

export type ScheduleInterviewDto = {
    jobId?: string;
    skillOwnerId?: number;
    stage?: number;
    interviewedBy?: string;
    dateOfInterview?: string;
    timeOfInterview?: LocalTime;
    endTimeOfInterview?: LocalTime;
    modeOfInterview?: string;
};
