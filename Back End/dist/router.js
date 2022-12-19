"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// PathNode
const node_path_1 = __importDefault(require("node:path"));
// Routes
const express_1 = require("express");
// Multer
const multer_1 = __importDefault(require("multer"));
// useCases
const listCategories_1 = require("./useCases/categories/listCategories");
const createCategory_1 = require("./useCases/categories/createCategory");
const cancelCategory_1 = require("./useCases/categories/cancelCategory");
const listProducts_1 = require("./useCases/products/listProducts");
const createProduct_1 = require("./useCases/products/createProduct");
const cancelProduct_1 = require("./useCases/products/cancelProduct");
const listProductsByCategories_1 = require("./useCases/products/listProductsByCategories");
const listOrders_1 = require("./useCases/orders/listOrders");
const createOrder_1 = require("./useCases/orders/createOrder");
const changeOrderStatus_1 = require("./useCases/orders/changeOrderStatus");
const cancelOrder_1 = require("./useCases/orders/cancelOrder");
// Routes
exports.router = (0, express_1.Router)();
// Multer = uploadImage
const upload = (0, multer_1.default)({
    storage: multer_1.default.diskStorage({
        destination(req, file, callback) {
            callback(null, node_path_1.default.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        },
    })
});
// List Categories
exports.router.get('/categories', listCategories_1.listCategories);
// Create Category
exports.router.post('/categories', createCategory_1.createCategory);
// Delete/Cancel Category
exports.router.delete('/categories/:categoryId', cancelCategory_1.cancelCategory);
// List Products
exports.router.get('/products', listProducts_1.listProducts);
// Create Product
exports.router.post('/products', upload.single('image'), createProduct_1.createProducty);
// Delete/Cancel Product
exports.router.delete('/products/:productsId', cancelProduct_1.cancelProduct);
// Get products by category
exports.router.get('/categories/:categoryId/products', listProductsByCategories_1.listProductsByCategories);
// List Orders
exports.router.get('/orders', listOrders_1.listOrders);
// Create Order
exports.router.post('/orders', createOrder_1.createOrder);
// Change Order Status
exports.router.patch('/orders/:orderId', changeOrderStatus_1.changeOrderStatus);
// Delete/Cancel Order
exports.router.delete('/orders/:orderId', cancelOrder_1.cancelOrder);
