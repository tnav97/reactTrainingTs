/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTime } from './LocalTime';

export type RescheduleDto = {
    jobId?: string;
    skillOwnerId?: number;
    currentStage?: number;
    dateOfInterview?: string;
    startTime?: LocalTime;
    endTime?: LocalTime;
    status?: string;
};
