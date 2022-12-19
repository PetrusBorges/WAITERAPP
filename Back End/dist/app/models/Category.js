"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
// Data base mongoose
const mongoose_1 = require("mongoose");
exports.Category = (0, mongoose_1.model)('Category', new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    }
}));
