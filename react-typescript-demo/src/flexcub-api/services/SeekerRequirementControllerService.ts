/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JobDto } from '../models/JobDto';
import type { SeekerRequirement } from '../models/SeekerRequirement';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeekerRequirementControllerService {

    /**
     * @param requestBody 
     * @returns JobDto Success
     * @throws ApiError
     */
    public static updateRequirementDetailsData(
requestBody: SeekerRequirement,
): CancelablePromise<JobDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SeekerRequirementController/updateData',
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
     * @returns JobDto Success
     * @throws ApiError
     */
    public static insertRequirementDetailsData(
requestBody: Array<SeekerRequirement>,
): CancelablePromise<Array<JobDto>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SeekerRequirementController/insertData',
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
     * @param skillSeekerId 
     * @returns SeekerRequirement Success
     * @throws ApiError
     */
    public static getRequirementDetails(
skillSeekerId: number,
): CancelablePromise<Array<SeekerRequirement>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SeekerRequirementController/getRequirementData',
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
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteData1(
id: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/SeekerRequirementController/deleteData',
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
