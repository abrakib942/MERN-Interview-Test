"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const drawing_routes_1 = require("../modules/drawing/drawing.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/drawing',
        routes: drawing_routes_1.DrawingRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.routes));
exports.default = router;
