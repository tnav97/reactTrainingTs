/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceStatus } from './InvoiceStatus';

export type InvoiceDetails = {
    invoiceId?: string;
    seekerProjectName?: string;
    clientName?: string;
    date?: string;
    status?: InvoiceStatus;
    paymentDueDate?: string;
    partnerId?: number;
    partnerName?: string;
    weekStartDate?: string;
    comments?: string;
};
