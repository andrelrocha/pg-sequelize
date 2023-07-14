import { NextFunction, Request, Response } from "express"; 

import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
    constructor(private createAddress: CreateAddressUseCase) { }

    async handle(request: Request, response: Response, next: NextFunction): Promise<Response> {
        try {
            const { street, number, zipCode } = request.body;

            const address = await this.createAddress.execute({ street, number, zipCode });

            return response.status(201).send({ message: "Address created successfully", address });
        } catch (error) {
            return next(error) as unknown as Response<unknown, Record<string, unknown>>;
        }
    }
}

export { CreateAddressController }
