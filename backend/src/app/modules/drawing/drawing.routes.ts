import express from 'express';
import { DrawingController } from './drawing.controller';

const router = express.Router();

router.post('/create-drawing', DrawingController.createDrawing);
router.get('/:id', DrawingController.getSingleDrawing);
router.patch('/:id', DrawingController.updateDrawing);
router.delete('/:id', DrawingController.deleteDrawing);

router.get('/', DrawingController.getDrawings);

export const DrawingRoutes = router;
