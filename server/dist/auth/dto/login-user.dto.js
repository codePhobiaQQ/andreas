"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDtoToClient = exports.LoginUserDto = void 0;
class LoginUserDto {
}
exports.LoginUserDto = LoginUserDto;
class UserDtoToClient {
    constructor(user) {
        this.email = user.email;
        this.id = user.id;
        this.isActive = user.isActive;
        this.roles = user.roles;
    }
}
exports.UserDtoToClient = UserDtoToClient;
//# sourceMappingURL=login-user.dto.js.map