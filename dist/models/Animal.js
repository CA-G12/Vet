"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const connection_1 = tslib_1.__importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
class Animal extends sequelize_1.Model {
}
Animal.init({
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: connection_1.default
});
exports.default = Animal;
//# sourceMappingURL=Animal.js.map