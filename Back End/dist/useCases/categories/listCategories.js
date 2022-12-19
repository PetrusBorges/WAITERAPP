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
exports.listCategories = void 0;
// Model
const Category_1 = require("../../app/models/Category");
function listCategories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const categories = yield Category_1.Category.find();
            res.json(categories);
        }
        catch (error) {
            console.log(error);
            res.status(500);
        }
    });
}
exports.listCategories = listCategories;
