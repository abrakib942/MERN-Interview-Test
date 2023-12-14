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
exports.DrawingController = void 0;
const drawing_model_1 = require("./drawing.model");
const createDrawing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield drawing_model_1.Drawing.create(req.body);
        res.status(200).json({
            success: true,
            message: 'drawing created successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getDrawings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield drawing_model_1.Drawing.find({});
        res.status(200).json({
            success: true,
            message: 'drawings retrieved successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getSingleDrawing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield drawing_model_1.Drawing.findById(id);
        res.status(200).json({
            success: true,
            message: 'drawing retrieved successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateDrawing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield drawing_model_1.Drawing.findByIdAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            success: true,
            message: 'drawing updated successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteDrawing = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield drawing_model_1.Drawing.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: 'drawing deleted successfully!',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.DrawingController = {
    createDrawing,
    getDrawings,
    getSingleDrawing,
    updateDrawing,
    deleteDrawing,
};
