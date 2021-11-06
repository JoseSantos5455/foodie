"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
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
        discountPercentage: { type: Number, default: 0 },
    },
    size: [{ val: Number, price: Number }],
    countInStock: { type: Number, required: true, default: 0 },
    sold: { type: Number, default: 0 },
    rating: {
        type: Number,
        required: true,
        default: 0.0,
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0,
    },
    specs: {
        videoLink: String,
        countryOfProduction: String,
        weight: Number,
        model: String,
        color: String,
    },
    category: {
        type: ObjectId,
        ref: 'Category',
        required: true,
    },
}, {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});
productSchema.pre('save', function () {
    this.slug = (0, slugify_1.default)(this.title);
});
productSchema.virtuals('reviews', {
    ref: 'Review',
    localField: '_id',
    foreignField: 'product',
    justOne: false,
});
exports.default = (0, mongoose_1.model)('Product', productSchema);
//# sourceMappingURL=product.js.map