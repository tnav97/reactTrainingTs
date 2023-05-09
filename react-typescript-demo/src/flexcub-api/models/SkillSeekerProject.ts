/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { SkillSeekerEntity } from './SkillSeekerEntity';
import type { SkillSeekerTask } from './SkillSeekerTask';
import type { SkillSeekerTechnologyData } from './SkillSeekerTechnologyData';

export type SkillSeekerProject = {
    taskData?: Array<SkillSeekerTask>;
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
