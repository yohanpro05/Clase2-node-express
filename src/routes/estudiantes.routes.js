import { Router } from "express";
import { agregar, buscar, aprobados, promedio } from "../controllers/estudiantes.controller.js";

const router = Router();

router.post('/agregar', agregar);
router.get('/buscar/:id', buscar);
router.get('/aprobados', aprobados);
router.get('/promedio', promedio);

export default router;