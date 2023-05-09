/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { SkillSeekerEntity } from './SkillSeekerEntity';
import type { SkillSeekerTechnologyData } from './SkillSeekerTechnologyData';

export type SkillSeekerProjectEntity = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
    id?: number;
    skillSeeker?: SkillSeekerEntity;
    ownerSkillDomainEntity?: OwnerSkillDomainEntity;
    title?: string;
    summary?: string;
    primaryContactEmail?: string;
    primaryContactPhone?: string;
    secondaryContactEmail?: string;
    secondaryContactPhone?: string;
    startDate?: string;
    endDate?: string;
    skillSeekerTechnologyData?: Array<SkillSeekerTechnologyData>;
};
