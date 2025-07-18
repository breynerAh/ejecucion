import { Router } from "express";
import createValoresContratosBrig from "../../controllers/valoresContratosBrig/create.js";

const router = Router();

router.post('/createValoresContratosBrig', createValoresContratosBrig)

export default router
