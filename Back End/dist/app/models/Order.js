"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
// Data base mongoose
const mongoose_1 = require("mongoose");
exports.Order = (0, mongoose_1.model)('Order', new mongoose_1.Schema({
    table: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['WAITING', 'IN_PRODUCTION', 'DONE'],
        default: 'WAITING',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    products: {
        required: true,
        type: [{
                product: {
                    type: mongoose_1.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Product',
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            }]
    }
}));
