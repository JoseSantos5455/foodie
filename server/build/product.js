"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    details: String,
    slug: { type: String, unique: true, index: true },
    image: { type: String, required: true },
    subImages: [String],
    brand: String,
    pricing: {
        originalPrice: { type: String, required: true },
        discountPercentage: { type: Number, default: 0 }
    },
    size: [
        { val: Number,
            price: Number
        },
    ],
    countInStock: { type: Number, required: true, default: 0 },
    sold: { type: Number, default: 0 },
    rating: {
        type: Number,
        required: true,
        default: 0.0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    specs: {
        videoLink: String,
        countryOfProduction: String,
        weight: Number,
        model: String,
        color: String
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true
    }
});
exports.default = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=product.js.map