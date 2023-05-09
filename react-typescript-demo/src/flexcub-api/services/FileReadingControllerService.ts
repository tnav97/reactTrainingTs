/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SkillOwnerFile } from '../models/SkillOwnerFile';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FileReadingControllerService {

    /**
     * @param id 
     * @param formData 
     * @returns SkillOwnerFile Success
     * @throws ApiError
     */
    public static uploadExcel(
id: string,
formData?: {
file: Array<Blob>;
},
): CancelablePromise<SkillOwnerFile> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/file-reading/uploadExcel',
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
     * @param id 
     * @returns string Success
     * @throws ApiError
     */
    public static setSkillPartnerDataInDb(
id: number,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/file-reading/syncSkillPartnerFile/{id}',
            path: {
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
     * @returns string Success
     * @throws ApiError
     */
    public static setSkillOwnerDataInDb(
id: number,
): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/file-reading/syncSkillOwnerFile/{id}',
            path: {
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
     * @returns binary Success
     * @throws ApiError
     */
    public static downloadTemplate(): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/file-reading/downloadTemplate',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
