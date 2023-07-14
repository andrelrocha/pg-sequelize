import { Router } from "express";

import { createAddress } from "../useCases/createAddress";

const addressRoutes = Router();

addressRoutes.post('/', (req, res, next) => {
    return createAddress.handle(req, res, next);
});

export { addressRoutes }