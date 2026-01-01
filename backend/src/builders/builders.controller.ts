import { Controller, Get, Post, Param, Query, Patch, Body, UseGuards, Request, ForbiddenException, ConflictException } from '@nestjs/common';
import { BuildersService } from './builders.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateBuilderDto } from './dto/update-builder.dto';

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

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async createProfile(
        @Body() createData: UpdateBuilderDto,
        @Request() req: any,
    ) {
        // Check if user already has a builder profile
        if (req.user.builderId) {
            throw new ConflictException('You already have a builder profile');
        }

        return this.buildersService.createProfile(req.user.id, createData);
    }

    @UseGuards(AuthGuard('jwt'))
    @Patch(':id')
    async updateProfile(
        @Param('id') id: string,
        @Body() updateData: UpdateBuilderDto,
        @Request() req: any,
    ) {
        // IDOR Check: Ensure the logged-in user owns this builder profile
        // Admin can update anyone
        if (req.user.role !== 'admin' && req.user.builderId !== id) {
            throw new ForbiddenException('You are not authorized to update this profile');
        }

        return this.buildersService.updateProfile(id, updateData);
    }
}
