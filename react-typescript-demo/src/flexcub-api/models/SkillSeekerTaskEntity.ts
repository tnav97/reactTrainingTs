/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillSeekerProjectEntity } from './SkillSeekerProjectEntity';

export type SkillSeekerTaskEntity = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
    id?: number;
    skillSeekerProject?: SkillSeekerProjectEntity;
    taskTitle?: string;
    taskDescription?: string;
    skillSeekerId?: number;
};
