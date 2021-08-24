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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const video_entity_1 = require("./video.entity");
const typeorm_2 = require("typeorm");
const file_service_1 = require("../file/file.service");
let VideoService = class VideoService {
    constructor(videoRepository, fileService) {
        this.videoRepository = videoRepository;
        this.fileService = fileService;
    }
    async addVideo(video, bigImg, preview, dto, userId) {
        try {
            const videoPath = this.fileService.createFile(file_service_1.FileType.VIDEO, video);
            const bigImgPath = this.fileService.createFile(file_service_1.FileType.IMAGE, bigImg);
            const previewPath = this.fileService.createFile(file_service_1.FileType.IMAGE, preview);
            const videoEl = await this.videoRepository.create(Object.assign(Object.assign({}, dto), { video: videoPath, bigImg: bigImgPath, preview: previewPath, user: userId }));
            await this.videoRepository.save(videoEl);
            return videoEl;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getAll() {
        try {
            const videos = await this.videoRepository.find();
            return videos;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findById(id) {
        try {
            const video = await this.videoRepository.findOne({ where: { id } });
            console.log(video);
            return video;
        }
        catch (e) {
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
VideoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(video_entity_1.Video)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        file_service_1.FileService])
], VideoService);
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map