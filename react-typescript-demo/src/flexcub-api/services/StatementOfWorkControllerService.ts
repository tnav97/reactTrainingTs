/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileResponse } from '../models/FileResponse';
import type { SowStatusDto } from '../models/SowStatusDto';
import type { StatementOfWork } from '../models/StatementOfWork';
import type { StatementOfWorkGetDetails } from '../models/StatementOfWorkGetDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class StatementOfWorkControllerService {

    /**
     * @param ownerId 
     * @param skillSeekerId 
     * @param domainId 
     * @param roles 
     * @param skillSeekerProjectId 
     * @param jobId 
     * @param formData 
     * @returns StatementOfWork Success
     * @throws ApiError
     */
    public static updateFile(
ownerId: number,
skillSeekerId: number,
domainId: number,
roles: string,
skillSeekerProjectId: number,
jobId: string,
formData?: {
document: Array<Blob>;
},
): CancelablePromise<StatementOfWork> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/statementOfWorkController/uploadSOW',
            query: {
                'ownerId': ownerId,
                'skillSeekerId': skillSeekerId,
                'domainId': domainId,
                'roles': roles,
                'skillSeekerProjectId': skillSeekerProjectId,
                'jobId': jobId,
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
     * @param ownerId 
     * @param skillSeekerId 
     * @param domainId 
     * @param roles 
     * @param skillSeekerProjectId 
     * @param jobId 
     * @param formData 
     * @returns StatementOfWork Success
     * @throws ApiError
     */
    public static uploadFile(
ownerId: number,
skillSeekerId: number,
domainId: number,
roles: string,
skillSeekerProjectId: number,
jobId: string,
formData?: {
document: Array<Blob>;
},
): CancelablePromise<StatementOfWork> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/statementOfWorkController/uploadSOW',
            query: {
                'ownerId': ownerId,
                'skillSeekerId': skillSeekerId,
                'domainId': domainId,
                'roles': roles,
                'skillSeekerProjectId': skillSeekerProjectId,
                'jobId': jobId,
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
     * @param sowId 
     * @param sowStatusId 
     * @returns SowStatusDto Success
     * @throws ApiError
     */
    public static updateSowStatus(
sowId: number,
sowStatusId: number,
): CancelablePromise<SowStatusDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/statementOfWorkController/updateSowStatus',
            query: {
                'sowId': sowId,
                'sowStatusId': sowStatusId,
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
    public static getSowTemplate(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/statementOfWorkController/getSowTemplate',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @returns StatementOfWorkGetDetails Success
     * @throws ApiError
     */
    public static getSowDetails(
skillSeekerId: number,
): CancelablePromise<Array<StatementOfWorkGetDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/statementOfWorkController/getSowDetails',
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
     * @returns StatementOfWorkGetDetails Success
     * @throws ApiError
     */
    public static getAllSowDetails(): CancelablePromise<Array<StatementOfWorkGetDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/statementOfWorkController/getAllSowDetails',
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
    public static downloadAgreementSow(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/statementOfWorkController/downloadOwnerAgreementForSow',
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
    public static downloadOwnerAgreement(
id: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/statementOfWorkController/downloadAgreementForSow',
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
