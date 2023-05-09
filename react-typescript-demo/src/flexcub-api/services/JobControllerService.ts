/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HiringPriority } from '../models/HiringPriority';
import type { JobDto } from '../models/JobDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class JobControllerService {

    /**
     * @param requestBody 
     * @returns JobDto Success
     * @throws ApiError
     */
    public static addJobDetails(
requestBody: JobDto,
): CancelablePromise<JobDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/jobCreation/createJob',
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
     * @param seekerId 
     * @returns JobDto Success
     * @throws ApiError
     */
    public static getJobDetails(
seekerId: number,
): CancelablePromise<Array<JobDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jobCreation/retrieveJob',
            query: {
                'seekerId': seekerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @returns JobDto Success
     * @throws ApiError
     */
    public static publish(
jobId: string,
): CancelablePromise<JobDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jobCreation/publish',
            query: {
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns HiringPriority Success
     * @throws ApiError
     */
    public static getHiringPriority(): CancelablePromise<Array<HiringPriority>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/jobCreation/hiringPriority',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteJob(
jobId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/jobCreation/deleteJob',
            query: {
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
