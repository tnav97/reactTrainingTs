/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OwnerSkillDomain } from '../models/OwnerSkillDomain';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillDomainControllerService {

    /**
     * @param requestBody 
     * @returns OwnerSkillDomain Success
     * @throws ApiError
     */
    public static updateDetails1(
requestBody: OwnerSkillDomain,
): CancelablePromise<OwnerSkillDomain> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/OwnerSkillDomain/updateSkillSet',
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
     * @returns OwnerSkillDomain Success
     * @throws ApiError
     */
    public static insertDetails2(
requestBody: OwnerSkillDomain,
): CancelablePromise<OwnerSkillDomain> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/OwnerSkillDomain/insertDomainDetails',
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
     * @returns OwnerSkillDomain Success
     * @throws ApiError
     */
    public static getDetails2(): CancelablePromise<Array<OwnerSkillDomain>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillDomain/getDomainDetails',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
