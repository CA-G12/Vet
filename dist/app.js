"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const cookie_parser_1 = tslib_1.__importDefault(require("cookie-parser"));
const environment_1 = tslib_1.__importDefault(require("./config/environment"));
const path_1 = require("path");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.nodeEnv = environment_1.default.nodeEnv;
        this.initializeMiddlwares();
    }
    initializeMiddlwares() {
        this.app.use((0, compression_1.default)());
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.static((0, path_1.join)(__dirname, '..', 'client', 'build')));
    }
}
const { app } = new App();
exports.default = app;
//# sourceMappingURL=app.js.map