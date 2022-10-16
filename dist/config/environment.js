"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT ?? 8080;
let dbUrl;
const nodeEnv = process.env.NODE_ENV ?? '';
switch (nodeEnv) {
    case 'development':
        dbUrl = process.env.DEV_DB_URL;
        break;
    case 'production':
        dbUrl = process.env.DATABASE_URL;
        break;
    case 'test':
        dbUrl = process.env.TEST_URL;
        break;
    default:
        dbUrl = 'postgres://mss_user:root@localhost:5432/mss';
}
exports.default = {
    port,
    dbUrl,
    nodeEnv
};
//# sourceMappingURL=environment.js.map