import { Router } from "express";

import { listUsers } from "../useCases/listUsers";
import { createUser } from "../useCases/createUser";
import { updateUser } from "../useCases/updateUser";

const userRoutes = Router();

userRoutes.get('/', (req, res, next) => {
    return listUsers.handle(req, res, next);
});

userRoutes.post('/', (req, res, next) => {
    return createUser.handle(req, res, next);
});

userRoutes.put('/:id', (req, res, next) => {
    return updateUser.handle(req, res, next);
});

export { userRoutes }