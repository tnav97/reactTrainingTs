/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PartnerInvoiceResponse } from './PartnerInvoiceResponse';

export type InvoiceRequest = {
    startDate?: string;
    endDate?: string;
    dueDate?: string;
    skillPartnerId?: number;
    partnerInvoiceResponseList?: Array<PartnerInvoiceResponse>;
};
