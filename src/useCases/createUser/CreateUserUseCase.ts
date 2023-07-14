import models from "../../models";

interface IUserRequest {
    name: string;
    email: string;
}

class CreateUserUseCase {
    
    async execute({ name, email }:IUserRequest ) {
        try {
            const userAlreadyExists = await models.users.findOne({ where: { email } });

            if (userAlreadyExists) {
                throw new Error("User already exists in our database.");
            } 

            const user = await models.users.create({ name, email });
            return user;
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { CreateUserUseCase }