/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillSeekerProject } from '../models/SkillSeekerProject';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeekerProjectControllerService {

    /**
     * @param requestBody 
     * @returns SkillSeekerProject Success
     * @throws ApiError
     */
    public static updateSeekerProjectDetails(
requestBody: SkillSeekerProject,
): CancelablePromise<SkillSeekerProject> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/skillseekerProject/updateData',
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
     * @returns SkillSeekerProject Success
     * @throws ApiError
     */
    public static insertSeekerProjectDetails(
requestBody: Array<SkillSeekerProject>,
): CancelablePromise<Array<SkillSeekerProject>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/skillseekerProject/insertData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @returns SkillSeekerProject Success
     * @throws ApiError
     */
    public static seekerProjectDetails(
skillSeekerId: number,
): CancelablePromise<Array<SkillSeekerProject>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillseekerProject/getProjectData',
            query: {
                'skillSeekerId': skillSeekerId,
            },
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
    public static deleteSeekerProjectDetails(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/skillseekerProject/deleteData',
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
