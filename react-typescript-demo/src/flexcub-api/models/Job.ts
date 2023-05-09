/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HiringPriority } from './HiringPriority';
import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { OwnerSkillTechnologiesEntity } from './OwnerSkillTechnologiesEntity';
import type { OwnerSkillYearOfExperience } from './OwnerSkillYearOfExperience';
import type { SkillSeekerEntity } from './SkillSeekerEntity';
import type { SkillSeekerProjectEntity } from './SkillSeekerProjectEntity';

export type Job = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
    jobId?: string;
    jobTitle?: string;
    jobLocation?: string;
    ownerSkillTechnologiesEntity?: Array<OwnerSkillTechnologiesEntity>;
    jobDescription?: string;
    ownerSkillDomainEntity?: OwnerSkillDomainEntity;
    seekerProject?: SkillSeekerProjectEntity;
    project?: string;
    ownerSkillYearOfExperience?: OwnerSkillYearOfExperience;
    numberOfPositions?: number;
    originalNumberOfPosition?: number;
    remote?: number;
    travel?: number;
    baseRate?: number;
    maxRate?: number;
    federalSecurityClearance?: boolean;
    screeningQuestions?: boolean;
    status?: string;
    hiringPriority?: HiringPriority;
    coreTechnology?: string;
    skillSeeker?: SkillSeekerEntity;
    taxIdBusinessLicense?: string;
    expiryDate?: string;
    customTech?: string;
};
