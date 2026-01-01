
import { Controller, Get, Patch, Delete, Param, UseGuards, Request } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/notifications')
@UseGuards(AuthGuard('jwt'))
export class NotificationsController {
    constructor(private readonly notificationsService: NotificationsService) { }

    @Get()
    async getAll(@Request() req: any) {
        return this.notificationsService.findAllForUser(req.user.id);
    }

    @Get('unread-count')
    async getUnreadCount(@Request() req: any) {
        const count = await this.notificationsService.getUnreadCount(req.user.id);
        return { count };
    }

    @Patch(':id/read')
    async markAsRead(@Param('id') id: string, @Request() req: any) {
        return this.notificationsService.markAsRead(id, req.user.id);
    }

    @Patch('read-all')
    async markAllAsRead(@Request() req: any) {
        return this.notificationsService.markAllAsRead(req.user.id);
    }

    @Delete(':id')
    async delete(@Param('id') id: string, @Request() req: any) {
        return this.notificationsService.delete(id, req.user.id);
    }

    @Delete()
    async deleteAll(@Request() req: any) {
        return this.notificationsService.deleteAll(req.user.id);
    }
}
