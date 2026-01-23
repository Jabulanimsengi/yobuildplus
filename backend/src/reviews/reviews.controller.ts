import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @Get('builder/:builderId')
    async getBuilderReviews(@Param('builderId') builderId: string) {
        return this.reviewsService.getBuilderReviews(builderId);
    }

    @Get('reviewable')
    @UseGuards(AuthGuard('jwt'))
    async getReviewableBuilders(@Request() req) {
        return this.reviewsService.getReviewableBuilders(req.user.id);
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    async createReview(
        @Request() req,
        @Body() body: {
            builderId: string;
            rating: number;
            comment: string;
            projectType?: string;
        }
    ) {
        return this.reviewsService.createReview(req.user.id, body);
    }
}
