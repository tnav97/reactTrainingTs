/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OwnerSkillLevel } from '../models/OwnerSkillLevel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillLevelControllerService {

    /**
     * @returns OwnerSkillLevel Success
     * @throws ApiError
     */
    public static getDetails1(): CancelablePromise<Array<OwnerSkillLevel>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillLevel/getSkillLevel',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
