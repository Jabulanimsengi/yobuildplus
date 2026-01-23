import { Controller, Get, Post, Delete, Param, UseGuards, Request } from '@nestjs/common';
import { SavedService } from './saved.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/saved')
@UseGuards(AuthGuard('jwt'))
export class SavedController {
    constructor(private readonly savedService: SavedService) { }

    @Get()
    async getSavedContractors(@Request() req) {
        return this.savedService.getSavedContractors(req.user.id);
    }

    @Get('ids')
    async getSavedIds(@Request() req) {
        return this.savedService.getSavedIds(req.user.id);
    }

    @Get(':builderId/check')
    async isSaved(@Request() req, @Param('builderId') builderId: string) {
        const isSaved = await this.savedService.isSaved(req.user.id, builderId);
        return { isSaved };
    }

    @Post(':builderId')
    async saveContractor(@Request() req, @Param('builderId') builderId: string) {
        await this.savedService.saveContractor(req.user.id, builderId);
        return { success: true, message: 'Contractor saved' };
    }

    @Delete(':builderId')
    async unsaveContractor(@Request() req, @Param('builderId') builderId: string) {
        await this.savedService.unsaveContractor(req.user.id, builderId);
        return { success: true, message: 'Contractor removed from saved' };
    }
}
