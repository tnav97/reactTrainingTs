/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractStatus } from '../models/ContractStatus';
import type { FileResponse } from '../models/FileResponse';
import type { MsaStatusDto } from '../models/MsaStatusDto';
import type { SeekerAdminMsa } from '../models/SeekerAdminMsa';
import type { SkillSeekerMsaDto } from '../models/SkillSeekerMsaDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeekerMsaControllerService {

    /**
     * @param msaId 
     * @param msaStatusId 
     * @returns MsaStatusDto Success
     * @throws ApiError
     */
    public static updateMsaStatus(
msaId: number,
msaStatusId: number,
): CancelablePromise<MsaStatusDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/skillSeekerMSAController/msaStatusUpdate',
            query: {
                'msaId': msaId,
                'msaStatusId': msaStatusId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @param skillSeekerProjectId 
     * @param jobId 
     * @param ownerId 
     * @param formData 
     * @returns SkillSeekerMsaDto Success
     * @throws ApiError
     */
    public static uploadFile1(
skillSeekerId: number,
skillSeekerProjectId: number,
jobId: string,
ownerId: number,
formData?: {
document: Array<Blob>;
},
): CancelablePromise<SkillSeekerMsaDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/skillSeekerMSAController/uploadMSA',
            query: {
                'skillSeekerId': skillSeekerId,
                'skillSeekerProjectId': skillSeekerProjectId,
                'jobId': jobId,
                'ownerId': ownerId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns binary Success
     * @throws ApiError
     */
    public static getSkillSeekerMsaTemplate(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerMSAController/getSkillSeekerMsaTemplate',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns SeekerAdminMsa Success
     * @throws ApiError
     */
    public static getMsaDetails(): CancelablePromise<Array<SeekerAdminMsa>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerMSAController/getMsaDetails',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @returns SeekerAdminMsa Success
     * @throws ApiError
     */
    public static getMsaDetailsBySeeker(
skillSeekerId: number,
): CancelablePromise<Array<SeekerAdminMsa>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerMSAController/getMsaDetailsBySeeker',
            query: {
                'skillSeekerId': skillSeekerId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns binary Success
     * @throws ApiError
     */
    public static downloadAgreement(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerMSAController/downloadOwnerAgreement',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static downloadOwnerAgreement1(
id: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerMSAController/downloadAgreement',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns ContractStatus Success
     * @throws ApiError
     */
    public static getContractStatus(): CancelablePromise<Array<ContractStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerMSAController/contractStatus',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
