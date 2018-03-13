import { Router } from "express";
import weapon from './weapon';

const router = new Router();
router.use(weapon);

export default router;
