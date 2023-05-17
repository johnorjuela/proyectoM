import express from "express";
import {consulta} from "../controllers/oraclecontrollers.js"
const router = express.Router();

router.post ("/consulta", consulta);

export default router;