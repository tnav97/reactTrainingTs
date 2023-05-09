/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContractDetails } from '../models/ContractDetails';
import type { Contracts } from '../models/Contracts';
import type { OnBoarding } from '../models/OnBoarding';
import type { ProjectTaskDetails } from '../models/ProjectTaskDetails';
import type { SeekerAccess } from '../models/SeekerAccess';
import type { SeekerModulesEntity } from '../models/SeekerModulesEntity';
import type { SeekerRoleListing } from '../models/SeekerRoleListing';
import type { SkillSeeker } from '../models/SkillSeeker';
import type { SubRole } from '../models/SubRole';
import type { SubRoles } from '../models/SubRoles';
import type { TemplateTable } from '../models/TemplateTable';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkillSeekerControllerService {

    /**
     * @param requestBody 
     * @returns SkillSeeker Success
     * @throws ApiError
     */
    public static updateClientDetails(
requestBody: SkillSeeker,
): CancelablePromise<SkillSeeker> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/SkillSeekerController/updateData',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param formData 
     * @returns TemplateTable Success
     * @throws ApiError
     */
    public static uploadAgreementTemplate(
formData?: {
document: Array<Blob>;
},
): CancelablePromise<Array<TemplateTable>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SkillSeekerController/uploadAgreementTemplate',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns OnBoarding Success
     * @throws ApiError
     */
    public static response(
requestBody: OnBoarding,
): CancelablePromise<OnBoarding> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SkillSeekerController/onboarding',
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
     * @returns SeekerAccess Success
     * @throws ApiError
     */
    public static addSubRole(
requestBody: SubRole,
): CancelablePromise<Array<SeekerAccess>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SkillSeekerController/addSubRole',
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
     * @param role 
     * @returns SkillSeeker Success
     * @throws ApiError
     */
    public static addSeekerSubRoles(
skillSeekerId: number,
role: number,
): CancelablePromise<SkillSeeker> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/SkillSeekerController/addSubRoleToSeeker',
            query: {
                'skillSeekerId': skillSeekerId,
                'role': role,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns SubRoles Success
     * @throws ApiError
     */
    public static getSubRoles(): CancelablePromise<Array<SubRoles>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getSubRoles',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param taxId 
     * @returns SkillSeeker Success
     * @throws ApiError
     */
    public static getSeekerById(
taxId: string,
): CancelablePromise<Array<SkillSeeker>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getSeekerByTaxId',
            query: {
                'taxId': taxId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillSeekerId 
     * @returns ProjectTaskDetails Success
     * @throws ApiError
     */
    public static getProjectTaskDetailsBySeeker(
skillSeekerId: number,
): CancelablePromise<ProjectTaskDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getProjectTaskDetailsBySeeker',
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
     * @returns SeekerModulesEntity Success
     * @throws ApiError
     */
    public static getModules(): CancelablePromise<Array<SeekerModulesEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getModules',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param keyword 
     * @returns string Success
     * @throws ApiError
     */
    public static getLocationByKeyword(
keyword: string,
): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getLocationByKeyword',
            query: {
                'keyword': keyword,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns ContractDetails Success
     * @throws ApiError
     */
    public static getListsOfContractDetails(
ownerId: number,
): CancelablePromise<Array<ContractDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getListsOfContractDetails',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @returns ContractDetails Success
     * @throws ApiError
     */
    public static getListsOfContractDetailsInPartner(
partnerId: number,
): CancelablePromise<Array<ContractDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getListsOfContractDetailsInPartner',
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
     * @param seekerId 
     * @returns Contracts Success
     * @throws ApiError
     */
    public static getContractDetails(
seekerId: number,
): CancelablePromise<Array<Contracts>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getContractDetails',
            query: {
                'seekerId': seekerId,
            },
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns Contracts Success
     * @throws ApiError
     */
    public static getAllContractDetails(): CancelablePromise<Array<Contracts>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getAllContractDetails',
            errors: {
                400: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param taxId 
     * @returns SeekerRoleListing Success
     * @throws ApiError
     */
    public static getAccessById(
taxId: string,
): CancelablePromise<Array<SeekerRoleListing>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/SkillSeekerController/getAccessByTaxId',
            query: {
                'taxId': taxId,
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
    public static deleteClientDetails(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/SkillSeekerController/deleteData',
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
