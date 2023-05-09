/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InvoiceUpdateData } from './InvoiceUpdateData';

export type InvoiceUpdate = {
    invoiceId?: string;
    invoiceDate?: string;
    invoiceUpdateList?: Array<InvoiceUpdateData>;
};
