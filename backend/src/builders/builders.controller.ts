import { Controller, Get, Param, Query, Patch, Body } from '@nestjs/common';
import { BuildersService } from './builders.service';

@Controller('api/builders')
export class BuildersController {
    constructor(private readonly buildersService: BuildersService) { }

    @Get()
    async findAll(
        @Query('province') province?: string,
        @Query('category') category?: string,
        @Query('minRating') minRating?: string,
        @Query('search') search?: string,
    ) {
        return this.buildersService.findAll({
            province,
            category,
            minRating: minRating ? parseFloat(minRating) : undefined,
            search,
        });
    }

    @Get(':slug')
    async findOne(@Param('slug') slug: string) {
        return this.buildersService.findBySlug(slug);
    }

    @Patch(':id')
    async updateProfile(
        @Param('id') id: string,
        @Body() updateData: {
            name?: string;
            description?: string;
            phone?: string;
            email?: string;
            website?: string;
            address?: string;
            logo?: string;
            coverImage?: string;
            photos?: string[];
            callOutFee?: number;
            hourlyRate?: number;
            serviceAreas?: string[];
            serviceAttributes?: string[];
        },
    ) {
        return this.buildersService.updateProfile(id, updateData);
    }
}
