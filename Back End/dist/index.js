"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
// Node
const node_http_1 = __importDefault(require("node:http"));
// PathNode
const node_path_1 = __importDefault(require("node:path"));
// express
const express_1 = __importDefault(require("express"));
// mongoose
const mongoose_1 = __importDefault(require("mongoose"));
// routes
const router_1 = require("./router");
// cors
const cors_1 = require("./app/middlewares/cors");
// SocketIO
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const server = node_http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server);
mongoose_1.default.connect('mongodb://localhost:27017')
    .then(() => {
    app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
    app.use(express_1.default.json());
    app.use(cors_1.cors);
    app.use(router_1.router);
    server.listen(3001, () => console.log('✨ Server started at http://localhost:3001'));
})
    .catch(() => console.log('Server not found'));
