"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _1 = require(".");
const seeds_json_1 = tslib_1.__importDefault(require("./seeds.json"));
const environment_1 = tslib_1.__importDefault(require("../config/environment"));
const buildDB = async () => {
    await _1.sequelize.sync({ force: true });
    await _1.Animal.bulkCreate(seeds_json_1.default.Animal);
    await _1.Tag.bulkCreate(seeds_json_1.default.Tag);
    await _1.User.bulkCreate(seeds_json_1.default.User);
    await _1.Post.bulkCreate(seeds_json_1.default.Post);
    await _1.Like.bulkCreate(seeds_json_1.default.Like);
};
if (environment_1.default.nodeEnv !== 'test') {
    buildDB();
}
exports.default = buildDB;
//# sourceMappingURL=build.js.map