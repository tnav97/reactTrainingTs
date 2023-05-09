/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillSeekerTask } from '../models/SkillSeekerTask';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SeekerTaskControllerService {

    /**
     * @param requestBody 
     * @returns SkillSeekerTask Success
     * @throws ApiError
     */
    public static updateSeekerTaskDetails(
requestBody: SkillSeekerTask,
): CancelablePromise<SkillSeekerTask> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/skillseekerTask/updateTask',
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
     * @param requestBody 
     * @returns SkillSeekerTask Success
     * @throws ApiError
     */
    public static insertSeekerTaskDetails(
requestBody: Array<SkillSeekerTask>,
): CancelablePromise<Array<SkillSeekerTask>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/skillseekerTask/insertTask',
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
     * @param projectId 
     * @param skillSeekerId 
     * @returns SkillSeekerTask Success
     * @throws ApiError
     */
    public static seekerTaskDetails(
projectId: number,
skillSeekerId: number,
): CancelablePromise<Array<SkillSeekerTask>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/skillseekerTask/getTaskData',
            query: {
                'projectId': projectId,
                'skillSeekerId': skillSeekerId,
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
    public static deleteSeekerTaskDetails(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/skillseekerTask/deleteTask',
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
