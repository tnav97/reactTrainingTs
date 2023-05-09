/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceStatus } from './InvoiceStatus';
import type { WorkEfforts } from './WorkEfforts';

export type InvoiceDetailResponse = {
    startDate?: string;
    endDate?: string;
    dueDate?: string;
    skillPartnerId?: number;
    status?: InvoiceStatus;
    invoiceDate?: string;
    invoiceData?: Array<WorkEfforts>;
    comments?: string;
};
