/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillSeekerTechnology } from '../models/SkillSeekerTechnology';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeekerTechnologyControllerService {

    /**
     * @param requestBody 
     * @returns SkillSeekerTechnology Success
     * @throws ApiError
     */
    public static updateSeekerTechnologyDetails(
requestBody: SkillSeekerTechnology,
): CancelablePromise<SkillSeekerTechnology> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/skillSeekerTechCard/updateData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns SkillSeekerTechnology Success
     * @throws ApiError
     */
    public static getDataByProjectId(
id: number,
): CancelablePromise<Array<SkillSeekerTechnology>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillSeekerTechCard/getDataByProjectId',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteSeekerTechDetails(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/skillSeekerTechCard/deleteData',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
