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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("../user/dto/create-user.dto");
const auth_service_1 = require("./auth.service");
const token_service_1 = require("../token/token.service");
let AuthController = class AuthController {
    constructor(authService, tokenService) {
        this.authService = authService;
        this.tokenService = tokenService;
    }
    async registration(userDto, response) {
        const user = await this.authService.registration(userDto);
        response.cookie('token', user.refreshToken, {
            maxAge: 30 * 24 * 60 * 60,
            httpOnly: true,
        });
        return response.json(user);
    }
    async login(userDto, response) {
        const user = await this.authService.login(userDto);
        response.cookie('token', user.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        return response.json(user);
    }
    async logout(response, request) {
        const { token } = request.cookies;
        await this.authService.logout(token);
        response.clearCookie('token');
        return response.json({ message: 'success' });
    }
};
__decorate([
    common_1.Post('registration'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registration", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('logout'),
    __param(0, common_1.Res()),
    __param(1, common_1.Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    common_1.Controller('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        token_service_1.TokenService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map