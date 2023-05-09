/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HiringPriority } from './HiringPriority';
import type { SkillSeekerEntity } from './SkillSeekerEntity';
import type { SkillSeekerProjectEntity } from './SkillSeekerProjectEntity';

export type SeekerRequirement = {
    jobId?: string;
    jobTitle?: string;
    skillSeeker?: SkillSeekerEntity;
    skillSeekerProjectEntity?: SkillSeekerProjectEntity;
    jobDescription?: string;
    expYears?: string;
    expMonths?: string;
    jobLocation?: string;
    expiryDate?: string;
    originalOfPositions?: number;
    positionsAvailable?: number;
    remote?: number;
    travel?: number;
    baseRate?: number;
    maxRate?: number;
    federalSecurityClearance?: boolean;
    screeningQuestions?: boolean;
    hiringPriority?: HiringPriority;
    coreTechnology?: string;
    taxIdBusinessLicense?: string;
    status?: string;
};
