"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProducty = void 0;
// Model
const Product_1 = require("../../app/models/Product");
function createProducty(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const imagePath = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
            const { name, description, price, category, ingredients } = req.body;
            const product = yield Product_1.Product.create({
                name,
                description,
                imagePath,
                price: Number(price),
                category,
                ingredients: ingredients ? JSON.parse(ingredients) : [],
            });
            res.status(201).json(product);
        }
        catch (error) {
            console.log(error);
            res.status(500);
        }
    });
}
exports.createProducty = createProducty;
