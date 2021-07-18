"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.enableCors();
    await app.listen(process.env.PORT || 5000, () => {
        console.log(`server is working on PORT = ${process.env.PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map