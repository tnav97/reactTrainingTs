/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecommendedCandidates } from '../models/RecommendedCandidates';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TalentRecommendationControllerService {

    /**
     * @param jobId 
     * @returns RecommendedCandidates Success
     * @throws ApiError
     */
    public static talentRecommendation(
jobId: string,
): CancelablePromise<Array<RecommendedCandidates>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/Recommendation/talents',
            query: {
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
