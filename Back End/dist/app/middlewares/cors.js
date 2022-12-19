"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
function cors(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Max-Age', '10');
    next();
}
exports.cors = cors;
