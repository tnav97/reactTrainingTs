/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FeedbackRate } from './FeedbackRate';
import type { LocalTime } from './LocalTime';

export type RequirementPhase = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
    requirementId?: number;
    jobId?: string;
    skillOwnerId?: number;
    stage?: number;
    requirementPhaseName?: string;
    dateOfInterview?: string;
    timeOfInterview?: LocalTime;
    endTimeOfInterview?: LocalTime;
    status?: string;
    interviewedBy?: string;
    feedback?: string;
    comments?: string;
    modeOfInterview?: string;
    candidateRate?: FeedbackRate;
    rescheduled?: boolean;
};
