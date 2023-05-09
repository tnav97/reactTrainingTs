/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContentEntity } from './ContentEntity';

export type SuperAdminNotifications = {
    id?: number;
    skillSeekerEntityId?: number;
    title?: string;
    contentId?: number;
    contentObj?: ContentEntity;
    markAsRead?: boolean;
    content?: string;
    msaId?: number;
    msaStatus?: string;
    date?: string;
    projectName?: string;
};
