/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillSeekerProjectEntity } from './SkillSeekerProjectEntity';

export type SkillSeekerTask = {
    taskId?: number;
    skillSeekerProjectEntity?: SkillSeekerProjectEntity;
    taskTitle?: string;
    taskDescription?: string;
    skillSeekerId?: number;
};
