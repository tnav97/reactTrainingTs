/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillOwnerSkillSet } from '../models/SkillOwnerSkillSet';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillSetControllerService {

    /**
     * @param requestBody 
     * @returns SkillOwnerSkillSet Success
     * @throws ApiError
     */
    public static updateDetails(
requestBody: SkillOwnerSkillSet,
): CancelablePromise<SkillOwnerSkillSet> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/OwnerSkillSet/updateSkillSet',
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
     * @returns SkillOwnerSkillSet Success
     * @throws ApiError
     */
    public static insertDetails1(
requestBody: SkillOwnerSkillSet,
): CancelablePromise<SkillOwnerSkillSet> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/OwnerSkillSet/insertSkillset',
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
     * @param skillOwnerId 
     * @returns SkillOwnerSkillSet Success
     * @throws ApiError
     */
    public static getDetails(
skillOwnerId: number,
): CancelablePromise<Array<SkillOwnerSkillSet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillSet/getSkillSet',
            query: {
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param skillId 
     * @returns string Success
     * @throws ApiError
     */
    public static deleteDetails(
skillId: number,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/OwnerSkillSet/deleteDataset',
            query: {
                'skillId': skillId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
