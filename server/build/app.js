"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
dotenv_1.default.config({ path: './config/.env' });
(0, db_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`));
process.on('unhandledRejection', (err) => {
    console.log(`Error : ${err.message}`);
    server.close(() => process.exit(1));
});
//# sourceMappingURL=app.js.map