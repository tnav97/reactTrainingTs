/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartnerAdmin } from '../models/PartnerAdmin';
import type { SeekerAdmin } from '../models/SeekerAdmin';
import type { SeekerStatusUpdate } from '../models/SeekerStatusUpdate';
import type { SkillSeeker } from '../models/SkillSeeker';
import type { TimeSheetResponse } from '../models/TimeSheetResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeekerAdminControllerService {

    /**
     * @param requestBody 
     * @returns SeekerStatusUpdate Success
     * @throws ApiError
     */
    public static updateSeekerStatus(
requestBody: SeekerStatusUpdate,
): CancelablePromise<SeekerStatusUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SeekerAdminController/updateSeekerStatus',
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
     * @returns SkillSeeker Success
     * @throws ApiError
     */
    public static updateClientDetails1(
requestBody: SkillSeeker,
): CancelablePromise<SkillSeeker> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SeekerAdminController/updateClientInfo',
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
     * @returns SkillSeeker Success
     * @throws ApiError
     */
    public static addClientDetails(
requestBody: SkillSeeker,
): CancelablePromise<SkillSeeker> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SeekerAdminController/addClientInfo',
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
     * @returns SeekerAdmin Success
     * @throws ApiError
     */
    public static skillSeekerByAdmin(): CancelablePromise<Array<SeekerAdmin>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SeekerAdminController/skillSeekerByAdmin',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns SkillSeeker Success
     * @throws ApiError
     */
    public static skillSeekerBasicDetail(
id: number,
): CancelablePromise<SkillSeeker> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SeekerAdminController/skillSeekerBasicDetail',
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
     * @returns PartnerAdmin Success
     * @throws ApiError
     */
    public static getAllSkillPartner(): CancelablePromise<Array<PartnerAdmin>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SeekerAdminController/getAllSkillPartner',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns TimeSheetResponse Success
     * @throws ApiError
     */
    public static timeSheets(): CancelablePromise<Array<TimeSheetResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SeekerAdminController/GetTimeSheet',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
