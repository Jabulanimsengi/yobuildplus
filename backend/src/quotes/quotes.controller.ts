
import { Controller, Post, Body, Get, Patch, Param, UseGuards, Request, ForbiddenException } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto, UpdateQuoteStatusDto, CreateQuotationDto, RespondToQuotationDto, RespondToRequestDto } from './dto/quote.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('api/quotes')
export class QuotesController {
    constructor(private readonly quotesService: QuotesService) { }

    // Public or Consumer - Submit a quote request
    @Post()
    async create(@Body() createQuoteDto: CreateQuoteDto, @Request() req: any) {
        // If user is logged in, attach their userId
        const userId = req.user?.id;
        return this.quotesService.create(createQuoteDto, userId);
    }

    // Consumer - Get my quote requests
    @UseGuards(AuthGuard('jwt'))
    @Get('my-quotes')
    async getMyQuotes(@Request() req: any) {
        return this.quotesService.findAllForUser(req.user.id);
    }

    // Public - Get single quote (for viewing quotation)
    @Get(':id')
    async getOne(@Param('id') id: string) {
        return this.quotesService.findOne(id);
    }

    // Builder - Get my leads
    @UseGuards(AuthGuard('jwt'))
    @Get('builder/leads')
    async getMyLeads(@Request() req: any) {
        if (!req.user.builderId && req.user.role !== 'admin') {
            throw new ForbiddenException('Not associated with a builder profile');
        }
        if (req.user.builderId) {
            return this.quotesService.findAllForBuilder(req.user.builderId);
        }
        return [];
    }

    // Builder - Get leads grouped by client
    @UseGuards(AuthGuard('jwt'))
    @Get('builder/leads/grouped')
    async getLeadsGroupedByClient(@Request() req: any) {
        if (!req.user.builderId && req.user.role !== 'admin') {
            throw new ForbiddenException('Not associated with a builder profile');
        }
        if (req.user.builderId) {
            return this.quotesService.findAllForBuilderGroupedByClient(req.user.builderId);
        }
        return [];
    }

    // Public - Get builder stats for profile
    @Get('builder/:builderId/stats')
    async getBuilderStats(@Param('builderId') builderId: string) {
        return this.quotesService.getBuilderStats(builderId);
    }

    // Public - Get global stats for hero section
    @Get('stats/global')
    async getGlobalStats() {
        return this.quotesService.getGlobalStats();
    }

    // Admin - Get all leads
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin')
    @Get('admin/all')
    async getAllLeads() {
        return this.quotesService.findAllForAdmin();
    }

    // Builder - Respond to request (accept/reject/consider) - BEFORE quotation
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/respond-request')
    async respondToRequest(
        @Param('id') id: string,
        @Body() respondDto: RespondToRequestDto,
        @Request() req: any,
    ) {
        if (!req.user.builderId) {
            throw new ForbiddenException('Only builders can respond to requests');
        }
        return this.quotesService.respondToRequest(id, req.user.builderId, respondDto);
    }

    // Builder - Create quotation (send quote to consumer)
    @UseGuards(AuthGuard('jwt'))
    @Post(':id/quotation')
    async createQuotation(
        @Param('id') id: string,
        @Body() createQuotationDto: CreateQuotationDto,
        @Request() req: any,
    ) {
        if (!req.user.builderId) {
            throw new ForbiddenException('Only builders can create quotations');
        }
        return this.quotesService.createQuotation(id, req.user.builderId, createQuotationDto);
    }

    // Consumer - Respond to quotation (accept/reject/counter-proposal)
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/respond')
    async respondToQuotation(
        @Param('id') id: string,
        @Body() respondDto: RespondToQuotationDto,
        @Request() req: any,
    ) {
        return this.quotesService.respondToQuotation(id, req.user.id, respondDto);
    }

    // Builder/Admin - Update status manually
    @UseGuards(AuthGuard('jwt'))
    @Patch(':id/status')
    async updateStatus(
        @Param('id') id: string,
        @Body() updateStatusDto: UpdateQuoteStatusDto,
        @Request() req: any,
    ) {
        return this.quotesService.updateStatus(id, updateStatusDto.status);
    }
}
