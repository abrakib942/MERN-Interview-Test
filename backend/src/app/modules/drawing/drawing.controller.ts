import { NextFunction, Request, Response } from 'express';
import { Drawing } from './drawing.model';

const createDrawing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await Drawing.create(req.body);

    res.status(200).json({
      success: true,
      message: 'drawing created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getDrawings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await Drawing.find({});

    res.status(200).json({
      success: true,
      message: 'drawings retrieved successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleDrawing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await Drawing.findById(id);

    res.status(200).json({
      success: true,
      message: 'drawing retrieved successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateDrawing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await Drawing.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'drawing updated successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteDrawing = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;

    const result = await Drawing.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'drawing deleted successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const DrawingController = {
  createDrawing,
  getDrawings,
  getSingleDrawing,
  updateDrawing,
  deleteDrawing,
};
