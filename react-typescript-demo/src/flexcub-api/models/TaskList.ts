/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SkillSeekerProjectEntity } from './SkillSeekerProjectEntity';
import type { Task } from './Task';

export type TaskList = {
    skillSeekerProjectEntity?: SkillSeekerProjectEntity;
    skillSeekerTasks?: Array<Task>;
};
