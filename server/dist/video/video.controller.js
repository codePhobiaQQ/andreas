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
exports.VideoController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const multer_1 = require("@nestjs/platform-express/multer");
const videoUppload_dto_1 = require("./dto/videoUppload.dto");
const video_service_1 = require("./video.service");
const token_service_1 = require("../token/token.service");
let VideoController = class VideoController {
    constructor(videoService, tokenService) {
        this.videoService = videoService;
        this.tokenService = tokenService;
    }
    async addVideo(files, videoData, request, response) {
        const user = await this.tokenService.validateAccessToken(request.headers.authorization.split(' ')[1]);
        const userId = user.id;
        const { video, bigImg, preview } = files;
        const afterAddVideo = await this.videoService.addVideo(video[0], bigImg[0], preview[0], videoData, userId);
        return response.json(afterAddVideo);
    }
    async getAllVideo() {
        const videos = await this.videoService.getAll();
        console.log(videos);
        return videos;
    }
};
__decorate([
    common_1.Post('add'),
    common_1.UseInterceptors(multer_1.FileFieldsInterceptor([
        { name: 'video', maxCount: 1 },
        { name: 'bigImg', maxCount: 1 },
        { name: 'preview', maxCount: 1 },
    ])),
    __param(0, common_1.UploadedFiles()),
    __param(1, common_1.Body()),
    __param(2, common_1.Req()),
    __param(3, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, videoUppload_dto_1.VideoUpploadDto, Object, Object]),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "addVideo", null);
__decorate([
    common_1.Get('get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VideoController.prototype, "getAllVideo", null);
VideoController = __decorate([
    common_2.Controller('video'),
    __metadata("design:paramtypes", [video_service_1.VideoService,
        token_service_1.TokenService])
], VideoController);
exports.VideoController = VideoController;
//# sourceMappingURL=video.controller.js.map