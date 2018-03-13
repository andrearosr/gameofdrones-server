import { Router } from "express";
import weapon from './weapon';
import user from './user';

const router = new Router();
router.use(weapon);
router.use(user);

export default router;
