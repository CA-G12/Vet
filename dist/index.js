"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const environment_1 = tslib_1.__importDefault(require("./config/environment"));
const port = environment_1.default.port;
app_1.default.listen(port, () => {
    console.log('server running in http://localhost:8080');
});
//# sourceMappingURL=index.js.map