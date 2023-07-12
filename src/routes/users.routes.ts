import { Router } from "express";

import { listUsers } from "../useCases/listUsers";

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    return listUsers.handle(req, res);
});

export { userRoutes }