/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Efforts } from './Efforts';

export type OwnerTimeSheet = {
    timeSheetId?: number;
    skillOwnerEntityId?: number;
    skillSeekerEntityId?: number;
    skillSeekerProjectEntityId?: number;
    efforts?: Array<Efforts>;
    startDate?: string;
    endDate?: string;
    hours?: string;
    totalHours?: string;
    approved?: boolean;
};
