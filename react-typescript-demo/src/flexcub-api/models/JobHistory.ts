/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequirementPhase } from './RequirementPhase';

export type JobHistory = {
    jobId?: string;
    businessName?: string;
    jobTitle?: string;
    location?: string;
    levelExperience?: string;
    hiringStatus?: string;
    expByName?: string;
    currentStage?: number;
    requirementPhases?: Array<RequirementPhase>;
};
