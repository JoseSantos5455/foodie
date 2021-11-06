"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ObjectId = mongoose_1.Schema.Types.ObjectId;
const orderSchema = new mongoose_1.Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true,
    },
    orderItems: [
        {
            productId: { type: ObjectId, required: true, ref: 'Product' },
            quantity: { type: Number, required: true },
            pricing: {
                originalPrice: Number,
                discountPercentage: Number,
            },
            title: { type: String, required: true },
            image: { type: String, required: true },
        },
    ],
    shippingInfo: {
        city: { type: String, required: true },
        phone: { type: String, required: true },
        isPhoneValidated: { type: Boolean, required: true, validate: true },
        address: { type: String, required: true },
        zipCode: { type: String, required: true },
    },
    paymentMethod: { type: String, required: true },
    orderStatus: { type: String, required: true, enum: ['pending', 'on going', 'canceled', 'delivered'] },
    subTotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    isPaid: { type: Boolean, required: true, default: false },
}, {
    timestamps: true,
});
exports.default = (0, mongoose_1.model)('Order', orderSchema);
//# sourceMappingURL=order.js.map