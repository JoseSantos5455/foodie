"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const reviewSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true, minlength: 3, maxlength: 200 },
    product: { type: ObjectId, ref: 'Product' },
    user: { type: ObjectId, ref: 'User' },
});
exports.default = (0, mongoose_1.model)('Review', reviewSchema);
//# sourceMappingURL=review.js.map