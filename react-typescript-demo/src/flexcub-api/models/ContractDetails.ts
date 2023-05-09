/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RequirementPhases } from './RequirementPhases';

export type ContractDetails = {
    nameOfOwner?: string;
    position?: string;
    experience?: string;
    currentStage?: number;
    jobId?: string;
    requirementPhaseList?: Array<RequirementPhases>;
    isMsaCreated?: boolean;
    msaId?: number;
    msaStatus?: string;
    isSowCreated?: boolean;
    sowId?: number;
    sowStatus?: string;
    isPoCreated?: boolean;
    poId?: number;
    poStatus?: string;
};
