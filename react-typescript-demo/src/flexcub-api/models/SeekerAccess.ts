/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SeekerModulesEntity } from './SeekerModulesEntity';
import type { SubRoles } from './SubRoles';

export type SeekerAccess = {
    accessId?: string;
    taxIdBusinessLicense?: string;
    subRoles?: SubRoles;
    seekerModulesEntity?: SeekerModulesEntity;
    active?: boolean;
};
