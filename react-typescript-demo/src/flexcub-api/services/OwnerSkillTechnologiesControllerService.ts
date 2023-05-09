/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OwnerSkillTechnologies } from '../models/OwnerSkillTechnologies';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillTechnologiesControllerService {

    /**
     * @returns OwnerSkillTechnologies Success
     * @throws ApiError
     */
    public static getDetailsTech(): CancelablePromise<Array<OwnerSkillTechnologies>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillTechnologies/getData',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
