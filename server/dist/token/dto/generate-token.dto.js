"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateTokenDto = void 0;
const role_entity_1 = require("../../role/role.entity");
class GenerateTokenDto {
    constructor(id, email, isActivated, roles) {
        this.id = id;
        this.email = email;
        this.isActivated = isActivated;
        this.roles = roles;
    }
}
exports.GenerateTokenDto = GenerateTokenDto;
//# sourceMappingURL=generate-token.dto.js.map