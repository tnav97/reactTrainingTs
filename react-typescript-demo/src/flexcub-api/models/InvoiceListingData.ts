/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceStatus } from './InvoiceStatus';

export type InvoiceListingData = {
    invoiceId?: string;
    soCount?: number;
    status?: InvoiceStatus;
    to?: string;
    invoiceDate?: string;
    weekStartDate?: string;
    paymentDueDate?: string;
    comments?: string;
};
