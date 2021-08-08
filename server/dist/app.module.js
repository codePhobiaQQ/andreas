"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const role_module_1 = require("./role/role.module");
const token_module_1 = require("./token/token.module");
const video_module_1 = require("./video/video.module");
require("reflect-metadata");
const response_middleware_1 = require("./middleware/response.middleware");
const file_module_1 = require("./file/file.module");
const serve_static_1 = require("@nestjs/serve-static");
const path = require("path");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(response_middleware_1.ResponseMiddleware).forRoutes('/*');
    }
};
AppModule = __decorate([
    common_1.Module({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
            }),
            serve_static_1.ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
            typeorm_1.TypeOrmModule.forRoot(),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            role_module_1.RoleModule,
            token_module_1.TokenModule,
            video_module_1.VideoModule,
            file_module_1.FileModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map