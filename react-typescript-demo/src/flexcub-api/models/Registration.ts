/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Roles } from './Roles';
import type { SeekerModulesEntity } from './SeekerModulesEntity';
import type { WorkForceStrength } from './WorkForceStrength';

export type Registration = {
    id?: number;
    businessName?: string;
    firstName?: string;
    lastName?: string;
    roles?: Roles;
    emailId?: string;
    password?: string;
    workForceStrength?: WorkForceStrength;
    city?: string;
    state?: string;
    mailStatus?: string;
    accountStatus?: boolean;
    contactPhone?: string;
    subRoles?: number;
    modulesAccess?: Array<SeekerModulesEntity>;
    taxIdBusinessLicense?: string;
    loginCount?: number;
    timeSheetAccess?: boolean;
};
