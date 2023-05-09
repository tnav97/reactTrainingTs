/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseAndMaxRate } from '../models/BaseAndMaxRate';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BaseAndMaxRateControllerService {

    /**
     * @param requestBody 
     * @returns BaseAndMaxRate Success
     * @throws ApiError
     */
    public static insertBaseAndMaxRateCard(
requestBody: BaseAndMaxRate,
): CancelablePromise<BaseAndMaxRate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/baseAndMaxRateCard/InsertData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns BaseAndMaxRate Success
     * @throws ApiError
     */
    public static getBaseAndMaxRateCardData(): CancelablePromise<Array<BaseAndMaxRate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/baseAndMaxRateCard/getData',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
