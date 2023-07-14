import { Router } from "express";

import { userRoutes } from "./users.routes";
import { addressRoutes } from "./address.routes";

const router = Router();

router.use('/users', userRoutes);
router.use('/address', addressRoutes);

export { router }