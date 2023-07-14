import { NextFunction, Request, Response } from "express"; 

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {

    constructor(private updateUser: UpdateUserUseCase) { }

    async handle(req: Request, res: Response, next: NextFunction): Promise<Response> {
        try {
            const { email, name } = req.body;

            await this.updateUser.execute(email, name);

            return res.status(200).send({ message: "User updated successfully" });
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }    
}

export { UpdateUserController }