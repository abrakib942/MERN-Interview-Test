import express from 'express';

const router = express.Router();

router.get('/');
router.post('/create-drawing ');
router.patch('/:id');
router.delete('/:id');

export const DrawingRoutes = router;
