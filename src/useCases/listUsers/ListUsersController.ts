import { NextFunction, Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    constructor(private listUsers: ListUsersUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction) {
        try {   
            let { limit = 5, page = 1 } = req.query;
            limit = Number(limit);
            page = Number(page);

            if (!(limit > 0 && page > 0)) {
                const err = new Error("One or more parameters are invalid. Page and limit must be positive numbers");
                return next(err) as unknown as Response<unknown, Record<string, unknown>>;
            }

            const { order = "name:1" } = req.query;
        
            const users = await this.listUsers.execute(limit, page, order);
            
            return res.status(200).json(users);
        } catch (err) {
            return res.status(500).json({ error: "Internal server error while loading user's database" });
        }
    }
}

export { ListUsersController }