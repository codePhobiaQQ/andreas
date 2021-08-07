"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoModule = void 0;
const common_1 = require("@nestjs/common");
const video_controller_1 = require("./video.controller");
const video_service_1 = require("./video.service");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("./video.entity");
const file_module_1 = require("../file/file.module");
const user_entity_1 = require("../user/user.entity");
const token_module_1 = require("../token/token.module");
let VideoModule = class VideoModule {
};
VideoModule = __decorate([
    common_1.Module({
        controllers: [video_controller_1.VideoController],
        providers: [video_service_1.VideoService],
        imports: [typeorm_1.TypeOrmModule.forFeature([video_entity_1.Video, user_entity_1.User]), file_module_1.FileModule, token_module_1.TokenModule],
    })
], VideoModule);
exports.VideoModule = VideoModule;
//# sourceMappingURL=video.module.js.map