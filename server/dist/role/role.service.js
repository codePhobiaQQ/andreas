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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("./role.entity");
const typeorm_2 = require("typeorm");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/user.entity");
let RoleService = class RoleService {
    constructor(roleRepository, userRepository, userService) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
        this.userService = userService;
    }
    async create(roleDto) {
        const role = await this.roleRepository.create({
            name: roleDto.name,
            description: roleDto.description,
        });
        await this.roleRepository.save(role);
        return role;
    }
    async getByValue(value) {
        try {
            const role = await this.roleRepository.findOne({
                where: { name: value },
            });
            console.log('role', role);
            return role;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async add(userId) {
        try {
            const role = await this.getByValue('admin');
            const user = await this.userService.getUserById(userId);
            console.log('user', user);
            console.log('role', role);
            let userHasRole = 0;
            user.roles.map((userRole) => {
                if (JSON.stringify(userRole) === JSON.stringify(role)) {
                    userHasRole = 1;
                }
            });
            if (!userHasRole) {
                user.roles.push(role);
            }
            await this.userRepository.save(user);
            return user;
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException(e.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.Role)),
    __param(1, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        user_service_1.UserService])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map