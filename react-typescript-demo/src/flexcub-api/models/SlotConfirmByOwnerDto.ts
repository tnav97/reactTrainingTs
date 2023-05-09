/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LocalTime } from './LocalTime';

export type SlotConfirmByOwnerDto = {
    jobId?: string;
    skillOwnerEntityId?: number;
    dateSlotsByOwner1?: string;
    dateSlotsByOwner2?: string;
    dateSlotsByOwner3?: string;
    timeSlotsByOwner1?: LocalTime;
    endTimeSlotsByOwner1?: LocalTime;
    timeSlotsByOwner2?: LocalTime;
    endTimeSlotsByOwner2?: LocalTime;
    timeSlotsByOwner3?: LocalTime;
    endTimeSlotsByOwner3?: LocalTime;
    slotsConfirmedBySeeker?: boolean;
};
