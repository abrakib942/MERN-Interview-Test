import express from 'express';
import { DrawingRoutes } from '../modules/drawing/drawing.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/drawing',
    routes: DrawingRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
