/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillLevelAndExperienceControllerService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getOwnerSkillYearOfExperienceDetails(): CancelablePromise<Array<Array<any>>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/levelAndExperience',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
