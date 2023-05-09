/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HiringEntity } from '../models/HiringEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HiringControllerService {

    /**
     * @param requestBody 
     * @returns HiringEntity Success
     * @throws ApiError
     */
    public static updateHiringDetailsData(
requestBody: HiringEntity,
): CancelablePromise<HiringEntity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/HiringController/updateData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns HiringEntity Success
     * @throws ApiError
     */
    public static insertHiringDetailsData(
requestBody: HiringEntity,
): CancelablePromise<HiringEntity> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/HiringController/insertData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns HiringEntity Success
     * @throws ApiError
     */
    public static getHiringDetails(): CancelablePromise<Array<HiringEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/HiringController/getData',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteData2(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/HiringController/deleteData',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
