"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const express = require("express");
async function start() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use(express.urlencoded({ extended: true, limit: '5mb' }));
    app.use(express.json({ limit: '5mb' }));
    app.enableCors({
        origin: ['http://localhost:3000', 'https://testing.nikitin-sergei.ru'],
        credentials: true,
    });
    app.use(cookieParser());
    await app.listen(process.env.PORT || 5000, () => {
        console.log(`server is working on PORT = ${process.env.PORT}`);
    });
}
start();
//# sourceMappingURL=main.js.map