/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Client } from '../models/Client';
import type { ClientDetails } from '../models/ClientDetails';
import type { ClientEntity } from '../models/ClientEntity';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ClientControllerService {

    /**
     * @param requestBody 
     * @returns ClientEntity Success
     * @throws ApiError
     */
    public static updateClient(
requestBody: ClientEntity,
): CancelablePromise<ClientEntity> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/ClientController/updateClient',
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
     * @returns Client Success
     * @throws ApiError
     */
    public static insertClient(
requestBody: Array<Client>,
): CancelablePromise<Array<Client>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/ClientController/insertClient',
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
     * @returns ClientDetails Success
     * @throws ApiError
     */
    public static getSkillOwnerId(
ownerId: number,
): CancelablePromise<ClientDetails> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/ClientController/getClientDetails',
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
     * @param clientId 
     * @returns any Success
     * @throws ApiError
     */
    public static deleteClient(
clientId: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/ClientController/deleteClient',
            query: {
                'clientId': clientId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Internal Server Error`,
            },
        });
    }

}
