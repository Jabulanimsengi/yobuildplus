import { Controller, Get, Post, Delete, Patch, Param, Body, Query, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('api/admin')
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Roles('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    // ============================================
    // USERS
    // ============================================

    @Get('users')
    async getAllUsers(@Query('role') role?: string) {
        return this.adminService.getAllUsers(role);
    }

    @Patch('users/:id')
    async updateUser(
        @Param('id') id: string,
        @Body() body: { name?: string; role?: string; email?: string },
    ) {
        return this.adminService.updateUser(id, body);
    }

    @Delete('users/:id')
    async deleteUser(@Param('id') id: string) {
        return this.adminService.deleteUser(id);
    }

    // ============================================
    // BUILDERS / CONTRACTORS
    // ============================================

    @Get('builders')
    async getAllBuilders(@Query('status') status?: string) {
        return this.adminService.getAllBuilders(status);
    }

    @Get('builders/pending')
    async getPendingBuilders() {
        return this.adminService.getPendingBuilders();
    }

    @Post('builders/:id/approve')
    async approveBuilder(@Param('id') id: string) {
        return this.adminService.approveBuilder(id);
    }

    @Post('builders/:id/reject')
    async rejectBuilder(
        @Param('id') id: string,
        @Body() body: { reason?: string },
    ) {
        return this.adminService.rejectBuilder(id, body.reason);
    }

    @Post('builders/:id/suspend')
    async suspendBuilder(@Param('id') id: string) {
        return this.adminService.suspendBuilder(id);
    }

    @Post('builders/:id/unsuspend')
    async unsuspendBuilder(@Param('id') id: string) {
        return this.adminService.unsuspendBuilder(id);
    }

    @Patch('builders/:id')
    async updateBuilder(
        @Param('id') id: string,
        @Body() body: { name?: string; email?: string; phone?: string; verified?: boolean; approvalStatus?: string },
    ) {
        return this.adminService.updateBuilder(id, body);
    }

    @Delete('builders/:id')
    async deleteBuilder(@Param('id') id: string) {
        return this.adminService.deleteBuilder(id);
    }

    // ============================================
    // QUOTES
    // ============================================

    @Get('quotes')
    async getAllQuotes(@Query('status') status?: string) {
        return this.adminService.getAllQuotes(status);
    }

    @Get('quotes/stats')
    async getQuoteStats() {
        return this.adminService.getQuoteStats();
    }

    @Get('quotes/:id')
    async getQuoteById(@Param('id') id: string) {
        return this.adminService.getQuoteById(id);
    }

    @Patch('quotes/:id/status')
    async updateQuoteStatus(
        @Param('id') id: string,
        @Body() body: { status: string },
    ) {
        return this.adminService.updateQuoteStatus(id, body.status);
    }

    @Delete('quotes/:id')
    async deleteQuote(@Param('id') id: string) {
        return this.adminService.deleteQuote(id);
    }

    // ============================================
    // ACTIVITY & STATS
    // ============================================

    @Get('activity')
    async getRecentActivity(@Query('limit') limit?: string) {
        return this.adminService.getRecentActivity(limit ? parseInt(limit) : 50);
    }

    @Get('edits/pending')
    async getPendingEdits() {
        return this.adminService.getPendingEdits();
    }

    @Get('stats')
    async getStats() {
        return this.adminService.getStats();
    }
}

