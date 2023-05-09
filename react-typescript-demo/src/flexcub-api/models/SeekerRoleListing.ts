/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SeekerModulesEntity } from './SeekerModulesEntity';

export type SeekerRoleListing = {
    roleId?: string;
    roleName?: string;
    accessList?: Array<SeekerModulesEntity>;
    status?: boolean;
};
