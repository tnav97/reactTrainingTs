/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { OwnerSkillLevelEntity } from './OwnerSkillLevelEntity';
import type { OwnerSkillRolesEntity } from './OwnerSkillRolesEntity';
import type { OwnerSkillTechnologiesEntity } from './OwnerSkillTechnologiesEntity';

export type SkillOwnerSkillSet = {
    ownerSkillSetId?: number;
    skillOwnerEntityId?: number;
    ownerSkillLevelEntity?: OwnerSkillLevelEntity;
    ownerSkillTechnologiesEntity?: OwnerSkillTechnologiesEntity;
    ownerSkillRolesEntity?: OwnerSkillRolesEntity;
    ownerSkillDomainEntity?: OwnerSkillDomainEntity;
    experience?: string;
    lastUsed?: string;
};
