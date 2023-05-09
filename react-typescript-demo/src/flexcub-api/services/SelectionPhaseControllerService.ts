/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcceptRejectDto } from '../models/AcceptRejectDto';
import type { FeedbackRate } from '../models/FeedbackRate';
import type { FlowLockedDto } from '../models/FlowLockedDto';
import type { InsertRequirementPhaseDto } from '../models/InsertRequirementPhaseDto';
import type { NewSlotRequestBySeekerDto } from '../models/NewSlotRequestBySeekerDto';
import type { RateApprovalDto } from '../models/RateApprovalDto';
import type { RejectCandidateDto } from '../models/RejectCandidateDto';
import type { RequirementPhaseDetailsDto } from '../models/RequirementPhaseDetailsDto';
import type { RescheduleDto } from '../models/RescheduleDto';
import type { ScheduleInterviewDto } from '../models/ScheduleInterviewDto';
import type { SelectionPhase } from '../models/SelectionPhase';
import type { SelectionPhaseDto } from '../models/SelectionPhaseDto';
import type { SelectionPhaseResponse } from '../models/SelectionPhaseResponse';
import type { SlotConfirmByOwnerDto } from '../models/SlotConfirmByOwnerDto';
import type { SlotConfirmBySeekerDto } from '../models/SlotConfirmBySeekerDto';
import type { StageStatusDto } from '../models/StageStatusDto';
import type { WorkFlowComponent } from '../models/WorkFlowComponent';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SelectionPhaseControllerService {

    /**
     * @param requestBody 
     * @returns RequirementPhaseDetailsDto Success
     * @throws ApiError
     */
    public static updateDetailsForParticularRound(
requestBody: RequirementPhaseDetailsDto,
): CancelablePromise<RequirementPhaseDetailsDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/updateDetailsForParticularRound',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SlotConfirmByOwnerDto Success
     * @throws ApiError
     */
    public static updateSlotBySkillOwner(
requestBody: SlotConfirmByOwnerDto,
): CancelablePromise<SlotConfirmByOwnerDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/slotsByOwner',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @returns SlotConfirmBySeekerDto Success
     * @throws ApiError
     */
    public static updateSlotConfirmedBySeeker(
jobId: string,
skillOwnerId: number,
): CancelablePromise<SlotConfirmBySeekerDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/slotConfirmationBySeeker',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @param stage 
     * @returns RequirementPhaseDetailsDto Success
     * @throws ApiError
     */
    public static selectedForRound(
jobId: string,
skillOwnerId: number,
stage: number,
): CancelablePromise<RequirementPhaseDetailsDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/selectedForRound',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
                'stage': stage,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns StageStatusDto Success
     * @throws ApiError
     */
    public static scheduleInterview(
requestBody: ScheduleInterviewDto,
): CancelablePromise<StageStatusDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/scheduleInterview',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @param stage 
     * @returns RescheduleDto Success
     * @throws ApiError
     */
    public static rescheduleForRound(
jobId: string,
skillOwnerId: number,
stage: number,
): CancelablePromise<RescheduleDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/rescheduleForRound',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
                'stage': stage,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns StageStatusDto Success
     * @throws ApiError
     */
    public static rejectCandidate(
requestBody: RejectCandidateDto,
): CancelablePromise<StageStatusDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/rejectCandidate',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @returns StageStatusDto Success
     * @throws ApiError
     */
    public static reInitiateHiring(
jobId: string,
skillOwnerId: number,
): CancelablePromise<StageStatusDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/reInitiateHiring',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns RateApprovalDto Success
     * @throws ApiError
     */
    public static skillOwnerRate(
requestBody: Array<RateApprovalDto>,
): CancelablePromise<Array<RateApprovalDto>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/rateForSkillOwner',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @returns NewSlotRequestBySeekerDto Success
     * @throws ApiError
     */
    public static updateNewSlotBySeeker(
jobId: string,
skillOwnerId: number,
): CancelablePromise<NewSlotRequestBySeekerDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/newSlotRequest',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns AcceptRejectDto Success
     * @throws ApiError
     */
    public static acceptRejectBySkillOwner(
requestBody: AcceptRejectDto,
): CancelablePromise<AcceptRejectDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/acceptRejectBySkillOwner',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param ownerId 
     * @returns StageStatusDto Success
     * @throws ApiError
     */
    public static acceptInterview(
jobId: string,
ownerId: number,
): CancelablePromise<StageStatusDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v1/selectionPhase/acceptInterview',
            query: {
                'jobId': jobId,
                'ownerId': ownerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @returns any Success
     * @throws ApiError
     */
    public static shortlistingMail(
jobId: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/selectionPhase/sendMail',
            query: {
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SelectionPhase Success
     * @throws ApiError
     */
    public static insertSelectionPhases(
requestBody: Array<SelectionPhaseDto>,
): CancelablePromise<Array<SelectionPhase>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/selectionPhase/insertSelectionPhase',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SelectionPhaseResponse Success
     * @throws ApiError
     */
    public static insertRequirementPhases(
requestBody: InsertRequirementPhaseDto,
): CancelablePromise<Array<SelectionPhaseResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/selectionPhase/insertRequirementPhases',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param requestBody 
     * @returns SlotConfirmByOwnerDto Success
     * @throws ApiError
     */
    public static insertUniversalSlot(
requestBody: SlotConfirmByOwnerDto,
): CancelablePromise<SlotConfirmByOwnerDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/selectionPhase/insertCommonSlotByOwner',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param skillOwnerEntityId 
     * @returns boolean Success
     * @throws ApiError
     */
    public static shortlistStatus(
skillOwnerEntityId: number,
): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/shortlistStatus',
            query: {
                'skillOwnerEntityId': skillOwnerEntityId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @returns FlowLockedDto Success
     * @throws ApiError
     */
    public static isLocked(
jobId: string,
): CancelablePromise<FlowLockedDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/isLocked',
            query: {
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns WorkFlowComponent Success
     * @throws ApiError
     */
    public static workFlow(): CancelablePromise<Array<WorkFlowComponent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/getWorkFlow',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @returns SlotConfirmByOwnerDto Success
     * @throws ApiError
     */
    public static getSelectionPhase(
jobId: string,
skillOwnerId: number,
): CancelablePromise<SlotConfirmByOwnerDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/getSlots',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @returns FeedbackRate Success
     * @throws ApiError
     */
    public static feedback(): CancelablePromise<Array<FeedbackRate>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/getFeedback',
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @returns SelectionPhaseResponse Success
     * @throws ApiError
     */
    public static getCandidatesByJobId(
jobId: string,
): CancelablePromise<Array<SelectionPhaseResponse>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/getCandidates',
            query: {
                'jobId': jobId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

    /**
     * @param jobId 
     * @param skillOwnerId 
     * @returns SelectionPhaseResponse Success
     * @throws ApiError
     */
    public static candidateInterviewDetails(
jobId: string,
skillOwnerId: number,
): CancelablePromise<SelectionPhaseResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/selectionPhase/candidateInterviewDetails',
            query: {
                'jobId': jobId,
                'skillOwnerId': skillOwnerId,
            },
            errors: {
                400: `Bad Request`,
                404: `Bad Request`,
                500: `Server Error`,
            },
        });
    }

}
