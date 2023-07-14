import { Router } from "express";

import { listUsers } from "../useCases/listUsers";
import { createUser } from "../useCases/createUser";

const userRoutes = Router();

userRoutes.get('/', (req, res) => {
    return listUsers.handle(req, res);
});

userRoutes.post('/', (req, res, next) => {
    return createUser.handle(req, res, next);
});

export { userRoutes }