"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleGuard = void 0;
const common_1 = require("@nestjs/common");
class RoleGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const authHeader = req.headers.authorization;
            console.log(req.user);
            return true;
        }
        catch (e) {
            throw new common_1.UnauthorizedException({
                message: 'Пользователь не авторизован',
            });
        }
        return undefined;
    }
}
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map