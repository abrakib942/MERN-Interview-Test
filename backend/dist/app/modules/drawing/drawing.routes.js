"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const drawing_controller_1 = require("./drawing.controller");
const router = express_1.default.Router();
router.post('/create-drawing', drawing_controller_1.DrawingController.createDrawing);
router.get('/:id', drawing_controller_1.DrawingController.getSingleDrawing);
router.patch('/:id', drawing_controller_1.DrawingController.updateDrawing);
router.delete('/:id', drawing_controller_1.DrawingController.deleteDrawing);
router.get('/', drawing_controller_1.DrawingController.getDrawings);
exports.DrawingRoutes = router;
