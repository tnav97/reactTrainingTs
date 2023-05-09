/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillLevelEntity } from './OwnerSkillLevelEntity';
import type { OwnerSkillRolesEntity } from './OwnerSkillRolesEntity';
import type { OwnerSkillTechnologiesEntity } from './OwnerSkillTechnologiesEntity';

export type SkillSeekerTechnologyData = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
    id?: number;
    ownerSkillTechnologiesEntity?: OwnerSkillTechnologiesEntity;
    ownerSkillRolesEntity?: OwnerSkillRolesEntity;
    ownerSkillLevelEntity?: OwnerSkillLevelEntity;
    baseRate?: number;
    maxRate?: number;
    expiresOn?: string;
    status?: string;
};
