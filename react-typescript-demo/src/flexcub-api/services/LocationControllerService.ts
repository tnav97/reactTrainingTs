/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LocationControllerService {

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static getStates(): CancelablePromise<Array<Record<string, string>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/LocationController/getStates',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param state 
     * @returns string Success
     * @throws ApiError
     */
    public static getCities(
state: string,
): CancelablePromise<Array<Record<string, string>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/LocationController/getCities/{state}',
            path: {
                'state': state,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static generateToken(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/LocationController/generateToken',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
