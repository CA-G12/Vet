"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sequelize_1 = require("sequelize");
const environment_1 = tslib_1.__importDefault(require("../config/environment"));
const sequelize = new sequelize_1.Sequelize(environment_1.default.dbUrl ?? '', {
    define: {
        timestamps: true
    }
});
exports.default = sequelize;
//# sourceMappingURL=connection.js.map