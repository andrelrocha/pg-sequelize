import { Router } from "express";

const router = Router();

router.get('/test', (req, res) => {
    return res.json({message: 'Hello World!'});
});

export { router }