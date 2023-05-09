/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { SeekerModulesEntity } from './SeekerModulesEntity';
import type { SubRoles } from './SubRoles';

export type SkillSeeker = {
    moduleAccess?: Array<SeekerModulesEntity>;
    id?: number;
    skillSeekerName?: string;
    ownerSkillDomainEntity?: OwnerSkillDomainEntity;
    addressLine1?: string;
    addressLine2?: string;
    state?: string;
    city?: string;
    zipCode?: number;
    phone?: string;
    email?: string;
    primaryContactFullName?: string;
    primaryContactEmail?: string;
    primaryContactPhone?: string;
    secondaryContactFullName?: string;
    secondaryContactEmail?: string;
    secondaryContactPhone?: string;
    status?: string;
    subRoles?: SubRoles;
    accessModule?: string;
    taxIdBusinessLicense?: string;
    registrationAccess?: boolean;
    addedByAdmin?: boolean;
    active?: boolean;
};
