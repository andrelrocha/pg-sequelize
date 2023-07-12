import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

class ListUsersController {
    constructor(private listUsers: ListUsersUseCase) { }

    async handle(req: Request, res: Response) {
        const users = await this.listUsers.execute();
        return res.json(users);
    }

}

export { ListUsersController }