"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const connection_1 = tslib_1.__importDefault(require("../db/connection"));
const sequelize_1 = require("sequelize");
class Comment extends sequelize_1.Model {
}
Comment.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    comment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    sequelize: connection_1.default
});
exports.default = Comment;
//# sourceMappingURL=Comment.js.map