/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OwnerSkillStatusEntity } from './OwnerSkillStatusEntity';
import type { SkillOwnerGenderEntity } from './SkillOwnerGenderEntity';
import type { SkillOwnerMaritalStatusEntity } from './SkillOwnerMaritalStatusEntity';
import type { SkillOwnerPortfolio } from './SkillOwnerPortfolio';
import type { SkillPartnerEntity } from './SkillPartnerEntity';
import type { VisaEntity } from './VisaEntity';

export type SkillOwnerEntity = {
    deletedAt?: string;
    createdAt?: string;
    createdBy?: number;
    changedAt?: string;
    changedBy?: number;
    skillOwnerEntityId?: number;
    skillPartnerEntity?: SkillPartnerEntity;
    firstName?: string;
    lastName?: string;
    primaryEmail: string;
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
    maritalStatus?: SkillOwnerMaritalStatusEntity;
    gender?: SkillOwnerGenderEntity;
    aboutMe?: string;
    ssn?: string;
    permanentAddress?: string;
    portfolioUrl?: Array<SkillOwnerPortfolio>;
    expMonths?: number;
    expYears?: number;
    visaStartDate?: string;
    visaEndDate?: string;
    federalStartDate?: string;
    federalEndDate?: string;
    federalSecurityClearance?: boolean;
    startDate?: string;
    endDate?: string;
    onBoardingDate?: string;
    resumeAvailable?: boolean;
    imageAvailable?: boolean;
    permanentCity?: string;
    permanentState?: string;
    dob?: string;
};
