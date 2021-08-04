"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("./token.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const jwt_1 = require("@nestjs/jwt");
const token_entity_1 = require("./token.entity");
const token_controller_1 = require("./token.controller");
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    common_1.Module({
        providers: [token_service_1.TokenService],
        controllers: [token_controller_1.TokenController],
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, token_entity_1.Token]), jwt_1.JwtModule.register({})],
        exports: [token_service_1.TokenService],
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map