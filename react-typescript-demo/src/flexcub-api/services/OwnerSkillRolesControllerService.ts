/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OwnerSkillRoles } from '../models/OwnerSkillRoles';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OwnerSkillRolesControllerService {

    /**
     * @returns OwnerSkillRoles Success
     * @throws ApiError
     */
    public static getDetailsroles(): CancelablePromise<Array<OwnerSkillRoles>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/OwnerSkillRoles/getlevel',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
