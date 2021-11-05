"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: String,
    slug: { type: String, required: true },
    parent: {
        type: ObjectId,
        default: null,
        ref: 'Category'
    },
    descendents: [{
            _id: {
                type: ObjectId,
                ref: 'Category',
                index: true
            },
            name: String,
            slug: String,
            image: String
        }]
});
exports.default = (0, mongoose_1.model)('Category', categorySchema);
//# sourceMappingURL=category.js.map