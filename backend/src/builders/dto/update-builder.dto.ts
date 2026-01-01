
import { IsString, IsOptional, IsEmail, IsUrl, IsArray, IsNumber, Min } from 'class-validator';

export class UpdateBuilderDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    phone?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsUrl()
    website?: string;

    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsString()
    logo?: string;

    @IsOptional()
    @IsString()
    coverImage?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    photos?: string[];

    @IsOptional()
    @IsNumber()
    @Min(0)
    callOutFee?: number;

    @IsOptional()
    @IsNumber()
    @Min(0)
    hourlyRate?: number;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    serviceAreas?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    serviceAttributes?: string[];
}
