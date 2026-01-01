
import { IsEmail, IsNotEmpty, IsString, IsOptional, IsEnum, IsUUID, IsArray, ValidateNested, IsNumber, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

// Quote request statuses
export const QUOTE_STATUS = {
    // Initial request
    QUOTE_REQUESTED: 'quote_requested',

    // Builder response to request
    REQUEST_ACCEPTED: 'request_accepted',
    REQUEST_REJECTED: 'request_rejected',
    REQUEST_CONSIDERING: 'request_considering',

    // Builder sends quotation
    QUOTED: 'quoted',

    // Consumer response to quotation
    QUOTE_ACCEPTED: 'quote_accepted',
    QUOTE_REJECTED: 'quote_rejected',
    COUNTER_PROPOSAL: 'counter_proposal',

    // Project created
    PROJECT_CREATED: 'project_created',
    COMPLETED: 'completed',
} as const;

export type QuoteStatus = typeof QUOTE_STATUS[keyof typeof QUOTE_STATUS];

export class CreateQuoteDto {
    @IsUUID()
    @IsNotEmpty()
    builderId!: string;

    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @IsNotEmpty()
    phone!: string;

    @IsOptional()
    @IsString()
    location?: string;

    @IsOptional()
    @IsString()
    title?: string;

    @IsString()
    @IsNotEmpty()
    message!: string;
}

// Builder responds to initial request (accept/reject/consider)
export class RespondToRequestDto {
    @IsEnum(['accept', 'reject', 'consider'])
    @IsNotEmpty()
    response!: 'accept' | 'reject' | 'consider';

    @IsOptional()
    @IsString()
    notes?: string;
}

export class UpdateQuoteStatusDto {
    @IsString()
    @IsNotEmpty()
    status!: string;
}

export class QuotationItemDto {
    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNumber()
    quantity!: number;

    @IsNumber()
    unitPrice!: number;

    @IsOptional()
    @IsString()
    unit?: string;

    @IsNumber()
    totalPrice!: number;
}

export class CreateQuotationDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuotationItemDto)
    items!: QuotationItemDto[];

    @IsOptional()
    @IsString()
    notes?: string;

    @IsOptional()
    @IsDateString()
    validUntil?: string;
}

export class RespondToQuotationDto {
    @IsEnum(['accepted', 'rejected', 'counter_proposal'])
    @IsNotEmpty()
    status!: 'accepted' | 'rejected' | 'counter_proposal';

    @IsOptional()
    @IsNumber()
    proposedAmount?: number;

    @IsOptional()
    @IsString()
    proposalNotes?: string;
}
