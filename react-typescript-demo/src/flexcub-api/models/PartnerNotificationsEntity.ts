/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentEntity } from './ContentEntity';
import type { LocalTime } from './LocalTime';

export type PartnerNotificationsEntity = {
    id?: number;
    skillPartnerEntityId?: number;
    title?: string;
    contentId?: number;
    contentObj?: ContentEntity;
    jobId?: string;
    date?: string;
    markAsRead?: boolean;
    content?: string;
    stage?: number;
    requirementPhaseName?: string;
    dateOfInterview?: string;
    timeOfInterview?: LocalTime;
    ownerId?: number;
    projectName?: string;
};
