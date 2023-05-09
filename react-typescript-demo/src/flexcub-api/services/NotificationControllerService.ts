/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoryOfJobs } from '../models/HistoryOfJobs';
import type { JobHistory } from '../models/JobHistory';
import type { OwnerDetails } from '../models/OwnerDetails';
import type { OwnerNotificationsEntity } from '../models/OwnerNotificationsEntity';
import type { PartnerNotificationsEntity } from '../models/PartnerNotificationsEntity';
import type { SeekerNotificationsEntity } from '../models/SeekerNotificationsEntity';
import type { SuperAdminNotifications } from '../models/SuperAdminNotifications';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationControllerService {

    /**
     * @param id 
     * @returns boolean Success
     * @throws ApiError
     */
    public static seekerMarkAsRead(
id: number,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/notifications/markAsReadSeeker',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns boolean Success
     * @throws ApiError
     */
    public static partnerMarkAsRead(
id: number,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/notifications/markAsReadPartner',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns boolean Success
     * @throws ApiError
     */
    public static ownerMarkAsRead(
id: number,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/notifications/markAsReadOwner',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns boolean Success
     * @throws ApiError
     */
    public static adminMarkAsRead(
id: number,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/notifications/markAsReadAdmin',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @param jobId 
     * @returns SeekerNotificationsEntity Success
     * @throws ApiError
     */
    public static getSeekerNotificationByOwner(
ownerId: number,
jobId: string,
): CancelablePromise<Array<SeekerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getSeekerNotificationForOwner',
            query: {
                'ownerId': ownerId,
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param seekerId 
     * @returns SeekerNotificationsEntity Success
     * @throws ApiError
     */
    public static getSeekerLastFiveNotification(
seekerId: number,
): CancelablePromise<Array<SeekerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getSeekerLastFiveNotification',
            query: {
                'seekerId': seekerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @param jobId 
     * @returns PartnerNotificationsEntity Success
     * @throws ApiError
     */
    public static getNotificationForParticularOwner(
ownerId: number,
jobId: string,
): CancelablePromise<Array<PartnerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getPartnerNotificationForParticularOwner',
            query: {
                'ownerId': ownerId,
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @returns OwnerDetails Success
     * @throws ApiError
     */
    public static getOwnerDetailsInPartner(
partnerId: number,
): CancelablePromise<Array<OwnerDetails>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getOwnerDetailsInPartner',
            query: {
                'partnerId': partnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @returns SuperAdminNotifications Success
     * @throws ApiError
     */
    public static getLastFiveSuperAdminNotication(): CancelablePromise<Array<SuperAdminNotifications>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getLastFiveSuperAdminNotification',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param partnerId 
     * @returns PartnerNotificationsEntity Success
     * @throws ApiError
     */
    public static getLastFiveNotificationOfPartner(
partnerId: number,
): CancelablePromise<Array<PartnerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getLastFiveNotificationOfPartner',
            query: {
                'partnerId': partnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns OwnerNotificationsEntity Success
     * @throws ApiError
     */
    public static getLastFiveNotificationOfOwner(
ownerId: number,
): CancelablePromise<Array<OwnerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getLastFiveNotificationOfOwner',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param skillOwnerId 
     * @param jobId 
     * @returns OwnerNotificationsEntity Success
     * @throws ApiError
     */
    public static getJobSpecificNotificationForOwner(
skillOwnerId: number,
jobId: string,
): CancelablePromise<Array<OwnerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getJobSpecificNotificationForOwner',
            query: {
                'skillOwnerId': skillOwnerId,
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns JobHistory Success
     * @throws ApiError
     */
    public static getJobHistoryInSeeker(
ownerId: number,
): CancelablePromise<Array<JobHistory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getJobHistoryInPartner',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param ownerId 
     * @returns HistoryOfJobs Success
     * @throws ApiError
     */
    public static historyOfJobs(
ownerId: number,
): CancelablePromise<Array<HistoryOfJobs>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getHistoryOfJobs',
            query: {
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns SeekerNotificationsEntity Success
     * @throws ApiError
     */
    public static seekerNotification(
id: number,
): CancelablePromise<Array<SeekerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getAllNotificationBySeekerId',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns PartnerNotificationsEntity Success
     * @throws ApiError
     */
    public static partnerNotification(
id: number,
): CancelablePromise<Array<PartnerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getAllNotificationByPartnerId',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns OwnerNotificationsEntity Success
     * @throws ApiError
     */
    public static ownerNotification(
id: number,
): CancelablePromise<Array<OwnerNotificationsEntity>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getAllNotificationByOwnerId',
            query: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @returns SuperAdminNotifications Success
     * @throws ApiError
     */
    public static getAdminNotifications(): CancelablePromise<Array<SuperAdminNotifications>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/getAllAdminNotifications',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

}
