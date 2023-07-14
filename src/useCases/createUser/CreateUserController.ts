import { NextFunction, Request, Response } from "express"; 

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUser: CreateUserUseCase) { }
    
    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const { name, email } = request.body;
            const createUserUseCase = new CreateUserUseCase();
            const user = await createUserUseCase.execute({ name, email });
            return response.status(201).json(user);
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateUserController }