/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileResponse } from '../models/FileResponse';
import type { PurchaseOrder } from '../models/PurchaseOrder';
import type { SeekerPurchaseOrder } from '../models/SeekerPurchaseOrder';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PoControllerService {

    /**
     * @param skillSeekerId 
     * @param skillSeekerProjectId 
     * @param skillOwnerId 
     * @param role 
     * @param domain 
     * @param jobId 
     * @param formData 
     * @returns PurchaseOrder Success
     * @throws ApiError
     */
    public static updateFile1(
skillSeekerId: number,
skillSeekerProjectId: number,
skillOwnerId: number,
role: string,
domain: number,
jobId: string,
formData?: {
document: Array<Blob>;
},
): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/purchaseOrder/uploadPO',
            query: {
                'skillSeekerId': skillSeekerId,
                'skillSeekerProjectId': skillSeekerProjectId,
                'skillOwnerId': skillOwnerId,
                'Role': role,
                'Domain': domain,
                'JobId': jobId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @param skillSeekerProjectId 
     * @param skillOwnerId 
     * @param role 
     * @param domain 
     * @param jobId 
     * @param formData 
     * @returns PurchaseOrder Success
     * @throws ApiError
     */
    public static uploadFile2(
skillSeekerId: number,
skillSeekerProjectId: number,
skillOwnerId: number,
role: string,
domain: number,
jobId: string,
formData?: {
document: Array<Blob>;
},
): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/purchaseOrder/uploadPO',
            query: {
                'skillSeekerId': skillSeekerId,
                'skillSeekerProjectId': skillSeekerProjectId,
                'skillOwnerId': skillOwnerId,
                'Role': role,
                'Domain': domain,
                'JobId': jobId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @param status 
     * @returns PurchaseOrder Success
     * @throws ApiError
     */
    public static updatePoStatus(
id: number,
status: number,
): CancelablePromise<PurchaseOrder> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/purchaseOrder/updateStatus',
            query: {
                'id': id,
                'status': status,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @returns SeekerPurchaseOrder Success
     * @throws ApiError
     */
    public static getPoDetails(
skillSeekerId: number,
): CancelablePromise<Array<SeekerPurchaseOrder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/purchaseOrder/getPurchaseOrder',
            query: {
                'skillSeekerId': skillSeekerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns binary Success
     * @throws ApiError
     */
    public static getProductOwnerTemplate(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/purchaseOrder/getPurchaseOrderTemplate',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns SeekerPurchaseOrder Success
     * @throws ApiError
     */
    public static getAllPoDetails(): CancelablePromise<Array<SeekerPurchaseOrder>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/purchaseOrder/getAllPurchaseOrder',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns binary Success
     * @throws ApiError
     */
    public static downloadAgreement1(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/purchaseOrder/downloadOwnerAgreementPO',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static downloadAgreementPo(
id: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/purchaseOrder/downloadAgreementPO',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
