/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordDto } from '../models/ChangePasswordDto';
import type { Login } from '../models/Login';
import type { Registration } from '../models/Registration';
import type { RegistrationEntity } from '../models/RegistrationEntity';
import type { SetOwnerPassword } from '../models/SetOwnerPassword';
import type { SkillOwnerEntity } from '../models/SkillOwnerEntity';
import type { Verify } from '../models/Verify';
import type { WorkForceStrength } from '../models/WorkForceStrength';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RegistrationControllerService {

    /**
     * @param requestBody 
     * @returns Registration Success
     * @throws ApiError
     */
    public static setPasswordForOwner(
requestBody: SetOwnerPassword,
): CancelablePromise<Registration> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/registration/setOwnerPassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param id 
     * @returns any Success
     * @throws ApiError
     */
    public static resendMail(
id: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/registration/reSendMail',
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
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static verifyCandidate(
requestBody: Verify,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns any Success
     * @throws ApiError
     */
    public static verifyForgotPass(
requestBody: ChangePasswordDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/verifyForgotPassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Registration Success
     * @throws ApiError
     */
    public static superAdminLoginScreen(
requestBody: Login,
): CancelablePromise<Registration> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/superAdminLoginScreen',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Registration Success
     * @throws ApiError
     */
    public static getLoginDetails(
requestBody: Login,
): CancelablePromise<Registration> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/loginScreen',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param failedMap 
     * @returns any Success
     * @throws ApiError
     */
    public static sendMailForFailedOwnerRegistrations(
failedMap: Record<string, Array<string>>,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/failedOwnerRegistration',
            query: {
                'failedMap': failedMap,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns Registration Success
     * @throws ApiError
     */
    public static insertDetails(
requestBody: RegistrationEntity,
): CancelablePromise<Registration> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/createAccount',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns boolean Success
     * @throws ApiError
     */
    public static changePassword(
requestBody: ChangePasswordDto,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/registration/changePassword',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param token 
     * @returns SkillOwnerEntity Success
     * @throws ApiError
     */
    public static verifyRegistrationForOwner(
token: string,
): CancelablePromise<SkillOwnerEntity> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/registration/verifyOwner',
            query: {
                'token': token,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @returns WorkForceStrength Success
     * @throws ApiError
     */
    public static getStrength(): CancelablePromise<Array<WorkForceStrength>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/registration/getStrengthTable',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

    /**
     * @param emailId 
     * @returns boolean Success
     * @throws ApiError
     */
    public static setForgotPassword(
emailId: string,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/registration/forgotPassword',
            query: {
                'emailId': emailId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `InternalServer Error`,
            },
        });
    }

}
