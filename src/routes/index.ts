import { Router } from "express";

import { userRoutes } from "./users.routes";

const router = Router();

router.get('/test', (req, res) => {
    return res.json({message: 'Hello World!'});
});

router.use('/users', userRoutes);

export { router }