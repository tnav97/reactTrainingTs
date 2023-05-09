/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillStatusEntity } from './OwnerSkillStatusEntity';
import type { SkillOwnerGender } from './SkillOwnerGender';
import type { SkillOwnerMaritalStatus } from './SkillOwnerMaritalStatus';
import type { SkillOwnerPortfolio } from './SkillOwnerPortfolio';
import type { VisaEntity } from './VisaEntity';

export type SkillOwnerDto = {
    skillOwnerEntityId?: number;
    skillPartnerId?: number;
    firstName?: string;
    lastName?: string;
    primaryEmail?: string;
    alternateEmail?: string;
    phoneNumber?: string;
    alternatePhoneNumber?: string;
    ownerSkillStatusEntity?: OwnerSkillStatusEntity;
    visaStatus?: VisaEntity;
    city?: string;
    state?: string;
    address?: string;
    linkedIn?: string;
    rateCard?: number;
    accountStatus?: boolean;
    status?: string;
    maritalStatus?: SkillOwnerMaritalStatus;
    gender?: SkillOwnerGender;
    aboutMe?: string;
    ssn?: string;
    permanentAddress?: string;
    portfolioUrl?: Array<SkillOwnerPortfolio>;
    expMonths?: number;
    expYears?: number;
    visaStartDate?: string;
    visaEndDate?: string;
    federalCheckStartDate?: string;
    federalCheckEndDate?: string;
    federalSecurityClearance?: boolean;
    image?: Array<string>;
    resume?: Array<string>;
    permanentCity?: string;
    permanentState?: string;
    dob?: string;
};
