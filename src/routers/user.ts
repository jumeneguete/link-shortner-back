import { Router } from "express";
import * as controller from "../controllers/user";
const router = Router();

router.post("/", controller.signUp);

export default router;
