/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentEntity } from './ContentEntity';

export type SeekerNotificationsEntity = {
    id?: number;
    skillSeekerEntityId?: number;
    skillOwnerId?: number;
    title?: string;
    contentId?: number;
    contentObj?: ContentEntity;
    jobId?: string;
    taxIdBusinessLicense?: string;
    date?: string;
    markAsRead?: boolean;
    content?: string;
    stage?: number;
    ownerId?: number;
    projectName?: string;
};
