"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuildersController = void 0;
const common_1 = require("@nestjs/common");
const builders_service_1 = require("./builders.service");
let BuildersController = class BuildersController {
    buildersService;
    constructor(buildersService) {
        this.buildersService = buildersService;
    }
    async findAll(province, category, minRating, search) {
        return this.buildersService.findAll({
            province,
            category,
            minRating: minRating ? parseFloat(minRating) : undefined,
            search,
        });
    }
    async findOne(slug) {
        return this.buildersService.findBySlug(slug);
    }
    async updateProfile(id, updateData) {
        return this.buildersService.updateProfile(id, updateData);
    }
};
exports.BuildersController = BuildersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('province')),
    __param(1, (0, common_1.Query)('category')),
    __param(2, (0, common_1.Query)('minRating')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], BuildersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BuildersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BuildersController.prototype, "updateProfile", null);
exports.BuildersController = BuildersController = __decorate([
    (0, common_1.Controller)('api/builders'),
    __metadata("design:paramtypes", [builders_service_1.BuildersService])
], BuildersController);
//# sourceMappingURL=builders.controller.js.map