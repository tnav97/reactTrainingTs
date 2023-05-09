/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillSeekerInterviewStages } from '../models/SkillSeekerInterviewStages';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkillSeekerInterviewStagesControllerService {

    /**
     * @returns SkillSeekerInterviewStages Success
     * @throws ApiError
     */
    public static getInterviewStages(): CancelablePromise<Array<SkillSeekerInterviewStages>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SeekerInterviewStages/getInterviewStages',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
