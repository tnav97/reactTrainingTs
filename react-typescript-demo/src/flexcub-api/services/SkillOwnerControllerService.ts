/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileResponse } from '../models/FileResponse';
import type { SkillOwnerDto } from '../models/SkillOwnerDto';
import type { SkillOwnerEntity } from '../models/SkillOwnerEntity';
import type { SkillOwnerGender } from '../models/SkillOwnerGender';
import type { SkillOwnerMaritalStatus } from '../models/SkillOwnerMaritalStatus';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SkillOwnerControllerService {

    /**
     * @param requestBody 
     * @returns SkillOwnerDto Success
     * @throws ApiError
     */
    public static updateOwnerProfile(
requestBody: SkillOwnerEntity,
): CancelablePromise<SkillOwnerDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/updateOwnerProfile',
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
     * @returns SkillOwnerEntity Success
     * @throws ApiError
     */
    public static updateOwnerDetails1(
requestBody: SkillOwnerEntity,
): CancelablePromise<SkillOwnerEntity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/updateData',
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
     * @param id 
     * @param formData 
     * @returns string Success
     * @throws ApiError
     */
    public static insertAttachment(
id: number,
formData?: {
resume?: Blob;
document?: Array<Blob>;
image?: Blob;
federal?: Blob;
},
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/v1/insertAttachment',
            query: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SkillOwnerEntity Success
     * @throws ApiError
     */
    public static insertDetails3(
requestBody: Array<SkillOwnerEntity>,
): CancelablePromise<Array<SkillOwnerEntity>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/insertData',
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
     * @param ownerId 
     * @param id 
     * @param formData 
     * @returns string Success
     * @throws ApiError
     */
    public static insertAttachment1(
ownerId: number,
id: number,
formData?: {
document?: Blob;
},
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v1/documentUpdates',
            query: {
                'ownerId': ownerId,
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @param count 
     * @returns binary Success
     * @throws ApiError
     */
    public static downloadOtherDocuments(
ownerId: number,
count: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/otherFilesDownload',
            query: {
                'ownerId': ownerId,
                'count': count,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns SkillOwnerMaritalStatus Success
     * @throws ApiError
     */
    public static maritalStatusList(): CancelablePromise<Array<SkillOwnerMaritalStatus>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/maritalStatus',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns SkillOwnerDto Success
     * @throws ApiError
     */
    public static getById(
id: number,
): CancelablePromise<SkillOwnerDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/getBySkillOwnerId',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @returns SkillOwnerGender Success
     * @throws ApiError
     */
    public static getGenderList(): CancelablePromise<Array<SkillOwnerGender>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/gender',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns binary Success
     * @throws ApiError
     */
    public static fileDownloadResume(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/fileDownloadResume',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns binary Success
     * @throws ApiError
     */
    public static downloadImage(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/fileDownloadImage',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns binary Success
     * @throws ApiError
     */
    public static fileDownloadFederal(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/fileDownloadFederal',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static downloadResume(
ownerId: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/downloadResume',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static downloadImageFile(
ownerId: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/downloadImage',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static downloadFederal(
ownerId: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/downloadFederal',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @param count 
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static otherFilesDownload(
ownerId: number,
count: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v1/OtherDocuments',
            query: {
                'ownerId': ownerId,
                'count': count,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static deletePortfolio(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/deletePortfolio',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param id 
     * @param count 
     * @returns any Success
     * @throws ApiError
     */
    public static deletePortfolio1(
id: number,
count: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v1/deleteOtherDocuments',
            query: {
                'id': id,
                'count': count,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
