/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Roles } from './Roles';
import type { WorkForceStrength } from './WorkForceStrength';

export type RegistrationEntity = {
    id?: number;
    roles?: Roles;
    businessName?: string;
    firstName?: string;
    lastName?: string;
    emailId?: string;
    password?: string;
    token?: string;
    accountStatus?: boolean;
    mailStatus?: string;
    taxIdBusinessLicense?: string;
    contactPhone?: string;
    contactEmail?: string;
    businessPhone?: string;
    workForceStrength?: WorkForceStrength;
    city?: string;
    state?: string;
    domainId?: number;
    technologyIds?: string;
    address?: string;
    excelId?: string;
    customTech?: string;
    createdAt?: string;
    trialExpiredOn?: string;
    loginCount?: number;
    isAccountActive?: boolean;
    trial?: boolean;
};
