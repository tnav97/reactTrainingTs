/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillDomainEntity } from './OwnerSkillDomainEntity';
import type { SubRoles } from './SubRoles';

export type SkillSeekerEntity = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
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
    startDate?: string;
    endDate?: string;
    taxIdBusinessLicense?: string;
    subRoles?: SubRoles;
    isActive?: boolean;
    registrationAccess?: boolean;
    addedByAdmin?: boolean;
};
