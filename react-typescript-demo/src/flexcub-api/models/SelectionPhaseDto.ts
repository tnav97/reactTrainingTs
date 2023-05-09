/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Job } from './Job';
import type { LocalTime } from './LocalTime';
import type { RequirementPhase } from './RequirementPhase';
import type { SkillOwnerEntity } from './SkillOwnerEntity';

export type SelectionPhaseDto = {
    selectionId?: number;
    job?: Job;
    skillOwnerEntity?: SkillOwnerEntity;
    requirementPhase?: Array<RequirementPhase>;
    currentStage?: number;
    showTicksValues?: boolean;
    showSelectionBar?: boolean;
    accepted?: boolean;
    dateSlotsByOwner1?: string;
    dateSlotsByOwner2?: string;
    dateSlotsByOwner3?: string;
    timeSlotsByOwner1?: LocalTime;
    timeSlotsByOwner2?: LocalTime;
    timeSlotsByOwner3?: LocalTime;
    newSlotRequested?: boolean;
    slotConfirmed?: boolean;
};
