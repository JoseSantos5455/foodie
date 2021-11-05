"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, validate: {
            validator: (email) => {
                const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(email);
            },
        } },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 60
    },
    phone: String,
    isPhoneValidated: {
        type: Boolean,
        default: false
    },
    city: String,
    address: String,
    zipCode: String,
    avatar: String
});
exports.default = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.js.map