/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Contracts } from '../models/Contracts';
import type { OwnerRateUpdate } from '../models/OwnerRateUpdate';
import type { OwnerStatusUpdate } from '../models/OwnerStatusUpdate';
import type { RateCardToSkillOwner } from '../models/RateCardToSkillOwner';
import type { SkillOwnerRateCard } from '../models/SkillOwnerRateCard';
import type { SkillPartner } from '../models/SkillPartner';
import type { SkillPartnerEntity } from '../models/SkillPartnerEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkillPartnerControllerService {

    /**
     * @param requestBody 
     * @returns OwnerStatusUpdate Success
     * @throws ApiError
     */
    public static skillOwnerStatusUpdate(
requestBody: OwnerStatusUpdate,
): CancelablePromise<OwnerStatusUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SkillPartnerController/updateSkillOwnerStatus',
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
     * @returns OwnerRateUpdate Success
     * @throws ApiError
     */
    public static skillOwnerRateUpdate(
requestBody: OwnerRateUpdate,
): CancelablePromise<OwnerRateUpdate> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SkillPartnerController/updateSkillOwnerRate',
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
     * @returns SkillOwnerRateCard Success
     * @throws ApiError
     */
    public static addRateCard(
requestBody: RateCardToSkillOwner,
): CancelablePromise<Array<SkillOwnerRateCard>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SkillPartnerController/updateRateCardDetails',
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
     * @returns SkillPartner Success
     * @throws ApiError
     */
    public static updateSkillPartnerDetails(
requestBody: SkillPartner,
): CancelablePromise<SkillPartner> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SkillPartnerController/updateData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @param percentage 
     * @returns SkillPartnerEntity Success
     * @throws ApiError
     */
    public static serviceFee(
partnerId: number,
percentage: number,
): CancelablePromise<SkillPartnerEntity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SkillPartnerController/serviceFeeInPercentage',
            query: {
                'partnerId': partnerId,
                'percentage': percentage,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SkillPartner Success
     * @throws ApiError
     */
    public static insertSkillPartnerDetails(
requestBody: SkillPartner,
): CancelablePromise<SkillPartner> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SkillPartnerController/insertData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns string Success
     * @throws ApiError
     */
    public static setDataInDb(
id: number,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillPartnerController/syncPartnerExcel/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns SkillPartner Success
     * @throws ApiError
     */
    public static getPartnerDetails(
id: number,
): CancelablePromise<SkillPartner> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillPartnerController/getPartnerDetails',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns SkillPartner Success
     * @throws ApiError
     */
    public static getSkillPartnerDetails(): CancelablePromise<Array<SkillPartner>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillPartnerController/getData',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @returns Contracts Success
     * @throws ApiError
     */
    public static getContractDetails1(
partnerId: number,
): CancelablePromise<Array<Contracts>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillPartnerController/getContractDetails',
            query: {
                'partnerId': partnerId,
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
    public static deleteData(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/SkillPartnerController/deleteData',
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
