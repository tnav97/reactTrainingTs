/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { HiringPriority } from './HiringPriority';
import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { OwnerSkillTechnologiesEntity } from './OwnerSkillTechnologiesEntity';
import type { OwnerSkillYearOfExperience } from './OwnerSkillYearOfExperience';
import type { SkillSeekerEntity } from './SkillSeekerEntity';
import type { SkillSeekerProjectEntity } from './SkillSeekerProjectEntity';

export type JobDto = {
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
    remote?: number;
    travel?: number;
    baseRate?: number;
    maxRate?: number;
    federalSecurityClearance?: boolean;
    screeningQuestions?: boolean;
    status?: string;
    hiringPriority?: HiringPriority;
    createdTime?: string;
    skillSeeker?: SkillSeekerEntity;
    customTech?: string;
    taxIdBusinessLicense?: string;
};
