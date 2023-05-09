/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminInvoice = {
    invoiceDataId?: number;
    timesheetId?: number;
    ownerId?: number;
    ownerName?: string;
    position?: string;
    client?: string;
    totalHours?: number;
    actualAmount?: number;
    amount?: number;
    invoiceCreationDate?: string;
    invoiceDueDate?: string;
    rateCard?: number;
    startDate?: string;
    endDate?: string;
};
