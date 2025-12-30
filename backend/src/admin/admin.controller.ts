import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('api/admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    // Get all pending builders
    @Get('builders/pending')
    async getPendingBuilders() {
        return this.adminService.getPendingBuilders();
    }

    // Approve a builder
    @Post('builders/:id/approve')
    async approveBuilder(@Param('id') id: string) {
        return this.adminService.approveBuilder(id);
    }

    // Reject a builder
    @Post('builders/:id/reject')
    async rejectBuilder(
        @Param('id') id: string,
        @Body() body: { reason?: string },
    ) {
        return this.adminService.rejectBuilder(id, body.reason);
    }

    // Get all pending profile edits
    @Get('edits/pending')
    async getPendingEdits() {
        return this.adminService.getPendingEdits();
    }

    // Dashboard stats
    @Get('stats')
    async getStats() {
        return this.adminService.getStats();
    }
}
