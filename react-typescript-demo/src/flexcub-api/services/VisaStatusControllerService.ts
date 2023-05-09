/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Visa } from '../models/Visa';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VisaStatusControllerService {

    /**
     * @returns Visa Success
     * @throws ApiError
     */
    public static getVisa(): CancelablePromise<Array<Visa>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/VisaStatusController/getVisa',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
