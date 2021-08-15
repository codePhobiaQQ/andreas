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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const generate_token_dto_1 = require("./dto/generate-token.dto");
const token_entity_1 = require("./token.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const login_user_dto_1 = require("../auth/dto/login-user.dto");
let TokenService = class TokenService {
    constructor(jwtService, tokenRegister) {
        this.jwtService = jwtService;
        this.tokenRegister = tokenRegister;
    }
    async generateToken(generateTokenDto) {
        const payload = {
            email: generateTokenDto.email,
            id: generateTokenDto.id,
            isActive: generateTokenDto.isActivated,
            roles: generateTokenDto.roles,
        };
        const accessToken = this.jwtService.sign(payload, {
            secret: process.env.SECRET_ACCESS_TOEKN,
            expiresIn: '30m',
        });
        const refreshToken = this.jwtService.sign(payload, {
            secret: process.env.SECRET_REFRESH_TOEKN,
            expiresIn: '30d',
        });
        return {
            accessToken,
            refreshToken,
        };
    }
    async saveToken(tokenDto) {
        const { userId, refreshToken } = tokenDto;
        const tokenData = await this.tokenRegister.findOne({ where: { userId } });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }
        const token = await this.tokenRegister.create(tokenDto);
        await this.tokenRegister.save(token);
        return token;
    }
    async deleteToken(token) {
        try {
            const tokenData = await this.tokenRegister.delete({
                refreshToken: token,
            });
            return tokenData;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Пользователь не авторизирован');
        }
    }
    validateAccessToken(token) {
        try {
            const userData = this.jwtService.verify(token, {
                secret: process.env.SECRET_ACCESS_TOEKN,
            });
            const userToClient = new login_user_dto_1.UserDtoToClient(userData);
            return userToClient;
        }
        catch (e) {
            throw new common_1.UnauthorizedException('Пользователь не авторизирован');
        }
    }
    validateRefreshToken(token) {
        try {
            const userData = this.jwtService.verify(token, {
                secret: process.env.SECRET_REFRESH_TOEKN,
            });
            return userData;
        }
        catch (e) {
            throw new common_1.HttpException('Неваллидный токен', 401);
        }
    }
    async refresh(token) {
        try {
            await this.findToken(token);
            const isValid = await this.validateRefreshToken(token);
            if (!isValid) {
                throw new common_1.UnauthorizedException('Пользователь не авторизирован');
            }
            console.log(token);
            const userData = this.jwtService.verify(token, {
                secret: process.env.SECRET_REFRESH_TOEKN,
            });
            const userDataNormal = new generate_token_dto_1.GenerateTokenDto(userData.id, userData.email, userData.isActive, userData.roles);
            console.log('data', userData);
            const { accessToken, refreshToken } = await this.generateToken(userDataNormal);
            await this.saveToken({ userId: isValid.id, refreshToken });
            return { accessToken, refreshToken };
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    async findToken(refreshToken) {
        try {
            const tokenData = await this.tokenRegister.findOne({
                where: { refreshToken },
            });
            return tokenData;
        }
        catch (e) {
            console.log(e);
            throw new common_1.UnauthorizedException('Пользователь не авторизирован');
        }
    }
};
TokenService = __decorate([
    common_1.Injectable(),
    __param(1, typeorm_1.InjectRepository(token_entity_1.Token)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map