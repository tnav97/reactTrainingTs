/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OwnerSkillStatus } from '../models/OwnerSkillStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillStatusControllerService {

    /**
     * @param requestBody 
     * @returns OwnerSkillStatus Success
     * @throws ApiError
     */
    public static updateOwnerDetails(
requestBody: OwnerSkillStatus,
): CancelablePromise<OwnerSkillStatus> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/OwnerSkillStatus/updateData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns OwnerSkillStatus Success
     * @throws ApiError
     */
    public static insertDetailsStatus(
requestBody: OwnerSkillStatus,
): CancelablePromise<OwnerSkillStatus> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/OwnerSkillStatus/insertData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns OwnerSkillStatus Success
     * @throws ApiError
     */
    public static getDetailsStatus(): CancelablePromise<Array<OwnerSkillStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillStatus/get',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
