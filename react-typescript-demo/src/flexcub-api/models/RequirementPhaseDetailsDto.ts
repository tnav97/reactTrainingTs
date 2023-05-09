/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeedbackRate } from './FeedbackRate';
import type { LocalTime } from './LocalTime';

export type RequirementPhaseDetailsDto = {
    jobId?: string;
    skillOwnerId?: number;
    dateOfInterview?: string;
    timeOfInterview?: LocalTime;
    stage?: number;
    status?: string;
    interviewedBy?: string;
    feedback?: string;
    modeOfInterview?: string;
    candidatePercentage?: FeedbackRate;
};
