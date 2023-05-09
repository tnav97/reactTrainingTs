/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTime } from './LocalTime';
import type { RequirementPhase } from './RequirementPhase';

export type SelectionPhaseResponse = {
    selectionId?: number;
    jobId?: string;
    jobTitle?: string;
    skillOwnerId?: number;
    skillOwnerName?: string;
    rate?: number;
    currentStage?: number;
    showTicksValues?: boolean;
    showSelectionBar?: boolean;
    experience?: string;
    requirementPhaseList?: Array<RequirementPhase>;
    accepted?: boolean;
    dateSlotsByOwner1?: string;
    dateSlotsByOwner2?: string;
    dateSlotsByOwner3?: string;
    timeSlotsByOwner1?: LocalTime;
    timeSlotsByOwner2?: LocalTime;
    timeSlotsByOwner3?: LocalTime;
    newSlotRequested?: boolean;
    slotConfirmed?: boolean;
    interviewAccepted?: boolean;
    msaCreated?: boolean;
    sowCreated?: boolean;
    poCreated?: boolean;
    imageAvailable?: boolean;
    resumeAvailable?: boolean;
};
