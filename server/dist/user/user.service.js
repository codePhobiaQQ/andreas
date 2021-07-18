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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcrypt");
const role_entity_1 = require("../role/role.entity");
const give_role_dto_1 = require("./dto/give-role.dto");
let UserService = class UserService {
    constructor(usersRepository, roleRepository) {
        this.usersRepository = usersRepository;
        this.roleRepository = roleRepository;
    }
    async create(userDto) {
        const hashPassword = await bcrypt.hash(userDto.password, 3);
        const user = await this.usersRepository.create({
            email: userDto.email,
            password: hashPassword,
            name: userDto.name,
        });
        await this.usersRepository.save(user);
        return user;
    }
    async giveRole(giveRoleDto) {
        const user = giveRoleDto.user;
        user.roles = giveRoleDto.roles;
        await this.usersRepository.save(user);
        return user;
    }
    async viewAll() {
        const users = await this.usersRepository.find({ relations: ['roles'] });
        return users;
    }
    async getUserById(id) {
        const user = await this.usersRepository.findOne({ where: { id: id } });
        return user;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __param(1, typeorm_1.InjectRepository(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map