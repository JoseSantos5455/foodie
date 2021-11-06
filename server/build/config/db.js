"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
async function default_1() {
    try {
        await mongoose_1.default.connect(process.env.MONGO_URI);
        console.log('DB CONNECTED');
    }
    catch (err) {
        console.log('Failed to connect to DB', err);
    }
}
exports.default = default_1;
//# sourceMappingURL=db.js.map