/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileResponse } from '../models/FileResponse';
import type { OwnerTimeSheet } from '../models/OwnerTimeSheet';
import type { SkillSeekerProject } from '../models/SkillSeekerProject';
import type { TimeSheet } from '../models/TimeSheet';
import type { TimesheetDocument } from '../models/TimesheetDocument';
import type { TimeSheetResponse } from '../models/TimeSheetResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerTimeSheetControllerService {

    /**
     * @param requestBody 
     * @returns TimeSheetResponse Success
     * @throws ApiError
     */
    public static updateTimeSheet(
requestBody: TimeSheetResponse,
): CancelablePromise<TimeSheetResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/OwnerSkillTimeSheet/updateTimeSheet',
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
     * @param timesheetId 
     * @param formData 
     * @returns TimesheetDocument Success
     * @throws ApiError
     */
    public static timesheetDocuments(
timesheetId: number,
formData?: {
document: Blob;
},
): CancelablePromise<TimesheetDocument> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/OwnerSkillTimeSheet/timesheetDocuments',
            query: {
                'timesheetId': timesheetId,
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
     * @returns TimeSheetResponse Success
     * @throws ApiError
     */
    public static insertTimeSheet(
requestBody: Array<OwnerTimeSheet>,
): CancelablePromise<Array<TimeSheetResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/OwnerSkillTimeSheet/insertTimeSheet',
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
     * @returns FileResponse Success
     * @throws ApiError
     */
    public static urlDownloadTimesheetDocuments(
id: number,
): CancelablePromise<FileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillTimeSheet/urlDownloadTimesheetDocument',
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
     * @param weekStartDate 
     * @param ownerId 
     * @returns TimeSheetResponse Success
     * @throws ApiError
     */
    public static getTimeSheet(
weekStartDate: string,
ownerId: number,
): CancelablePromise<Array<TimeSheetResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillTimeSheet/getTimeSheet',
            query: {
                'weekStartDate': weekStartDate,
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
     * @param skillOwnerId 
     * @returns SkillSeekerProject Success
     * @throws ApiError
     */
    public static getProjectDetails(
skillOwnerId: number,
): CancelablePromise<Array<SkillSeekerProject>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillTimeSheet/getSkillOwnerProjectDetails',
            query: {
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

    /**
     * @param skillOwnerId 
     * @returns TimeSheet Success
     * @throws ApiError
     */
    public static getOwnerTimeSheetDetails(
skillOwnerId: number,
): CancelablePromise<Array<TimeSheet>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillTimeSheet/getOwnerTimeSheetDetails',
            query: {
                'skillOwnerId': skillOwnerId,
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
    public static downloadTimesheetDocuments(
id: number,
): CancelablePromise<Blob> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillTimeSheet/downloadTimesheetDocuments',
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
     * @returns any Success
     * @throws ApiError
     */
    public static deleteTimeSheetData(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/OwnerSkillTimeSheet/deleteData',
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

}
