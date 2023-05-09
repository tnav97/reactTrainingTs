/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ClientProjects } from './ClientProjects';

export type ClientInvoiceDetails = {
    skillSeekerId?: number;
    skillSeekerName?: string;
    clientProjects?: Array<ClientProjects>;
};
