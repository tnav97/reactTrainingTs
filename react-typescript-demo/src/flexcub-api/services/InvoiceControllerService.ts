/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminInvoice } from '../models/AdminInvoice';
import type { AdminInvoiceRequest } from '../models/AdminInvoiceRequest';
import type { ClientInvoiceDetails } from '../models/ClientInvoiceDetails';
import type { InvoiceDetailResponse } from '../models/InvoiceDetailResponse';
import type { InvoiceDetails } from '../models/InvoiceDetails';
import type { InvoiceListingData } from '../models/InvoiceListingData';
import type { InvoiceRequest } from '../models/InvoiceRequest';
import type { InvoiceResponse } from '../models/InvoiceResponse';
import type { InvoiceStatus } from '../models/InvoiceStatus';
import type { InvoiceUpdate } from '../models/InvoiceUpdate';
import type { SeekerInvoice } from '../models/SeekerInvoice';
import type { SeekerInvoiceStatus } from '../models/SeekerInvoiceStatus';
import type { WorkEfforts } from '../models/WorkEfforts';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class InvoiceControllerService {

    /**
     * @param requestBody 
     * @returns InvoiceUpdate Success
     * @throws ApiError
     */
    public static updateInvoiceDetailsByPartner(
requestBody: InvoiceUpdate,
): CancelablePromise<InvoiceUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/invoice/updatePartnerInvoice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param invoiceId 
     * @param id 
     * @param comments 
     * @returns InvoiceResponse Success
     * @throws ApiError
     */
    public static updateInvoiceStatus(
invoiceId: string,
id: number,
comments?: string,
): CancelablePromise<InvoiceResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/invoice/updatePartnerInvoiceStatus',
            query: {
                'invoiceId': invoiceId,
                'id': id,
                'comments': comments,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns InvoiceUpdate Success
     * @throws ApiError
     */
    public static updateInvoiceDetailsByAdmin(
requestBody: InvoiceUpdate,
): CancelablePromise<InvoiceUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/invoice/updateAdminInvoice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param invoiceId 
     * @param statusId 
     * @param comments 
     * @returns SeekerInvoiceStatus Success
     * @throws ApiError
     */
    public static updateSeekerInvoiceStatus(
invoiceId: string,
statusId: number,
comments?: string,
): CancelablePromise<SeekerInvoiceStatus> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/invoice/updateAdminInvoiceStatus',
            query: {
                'invoiceId': invoiceId,
                'statusId': statusId,
                'comments': comments,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns InvoiceResponse Success
     * @throws ApiError
     */
    public static saveInvoiceDetailsByPartner(
requestBody: InvoiceRequest,
): CancelablePromise<InvoiceResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/invoice/savePartnerInvoice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns InvoiceResponse Success
     * @throws ApiError
     */
    public static saveInvoiceDetailsByAdmin(
requestBody: Array<AdminInvoiceRequest>,
): CancelablePromise<Array<InvoiceResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/invoice/saveAdminInvoice',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @returns InvoiceListingData Success
     * @throws ApiError
     */
    public static getInvoices(
partnerId: number,
): CancelablePromise<Array<InvoiceListingData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/submittedInvoicesByPartner',
            query: {
                'partnerId': partnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns InvoiceStatus Success
     * @throws ApiError
     */
    public static getInvoiceStatus(): CancelablePromise<Array<InvoiceStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/invoiceStatus',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param seekerId 
     * @param projectId 
     * @returns AdminInvoice Success
     * @throws ApiError
     */
    public static getPartnerInvoiceBySeeker(
seekerId: number,
projectId: number,
): CancelablePromise<Array<AdminInvoice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getPartnerInvoiceBySeeker',
            query: {
                'seekerId': seekerId,
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @param startDate 
     * @param endDate 
     * @returns WorkEfforts Success
     * @throws ApiError
     */
    public static getOwnersByPartners(
partnerId: number,
startDate: string,
endDate: string,
): CancelablePromise<Array<WorkEfforts>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getOwnersByPartnerId',
            query: {
                'partnerId': partnerId,
                'startDate': startDate,
                'endDate': endDate,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param invoiceId 
     * @param partnerGenerated 
     * @returns InvoiceDetailResponse Success
     * @throws ApiError
     */
    public static getInvoiceByInvoiceId(
invoiceId: string,
partnerGenerated: boolean,
): CancelablePromise<InvoiceDetailResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getInvoiceDetails',
            query: {
                'invoiceId': invoiceId,
                'partnerGenerated': partnerGenerated,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns InvoiceDetails Success
     * @throws ApiError
     */
    public static getAllInvoiceDetails(): CancelablePromise<Array<InvoiceDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getAllInvoiceDetails',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns InvoiceDetails Success
     * @throws ApiError
     */
    public static getAllInvoiceDetailAdmin(): CancelablePromise<Array<InvoiceDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getAllAdminInvoices',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param seekerId 
     * @returns SeekerInvoice Success
     * @throws ApiError
     */
    public static getAdminInvoiceData(
seekerId: number,
): CancelablePromise<Array<SeekerInvoice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getAdminInvoiceforSeeker',
            query: {
                'seekerId': seekerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param seekerId 
     * @param projectId 
     * @returns AdminInvoice Success
     * @throws ApiError
     */
    public static getAdminInvoiceData1(
seekerId: number,
projectId: number,
): CancelablePromise<Array<AdminInvoice>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getAdminInvoiceDetails',
            query: {
                'seekerId': seekerId,
                'projectId': projectId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param seekerId 
     * @returns InvoiceDetails Success
     * @throws ApiError
     */
    public static getAdminInvoiceBySeeker(
seekerId: number,
): CancelablePromise<Array<InvoiceDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/getAdminInvoiceBySeeker',
            query: {
                'seekerId': seekerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ClientInvoiceDetails Success
     * @throws ApiError
     */
    public static invoiceClientDetails(): CancelablePromise<Array<ClientInvoiceDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/invoice/clientDetailInInvoice',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
