/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceStatus } from './InvoiceStatus';

export type InvoiceResponse = {
    invoiceId?: string;
    totalAmount?: number;
    invoiceStatus?: InvoiceStatus;
};
