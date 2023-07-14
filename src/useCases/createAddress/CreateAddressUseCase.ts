import models from "../../models";

interface ICreateAddressUseCase {
    street: string;
    number: number;
    zipCode: string;
}

class CreateAddressUseCase  {
    async execute({ street, number, zipCode }: ICreateAddressUseCase) {
        try {
            
            if(!street || !number || !zipCode) throw new Error("Missing parameters");
            
            const addressAlreadyExists = await models.Address.findOne({
                where: {
                    street,
                    number,
                    zipCode
                }
            });

            if (addressAlreadyExists) throw new Error("Address already exists")

            const address = await models.Address.create({
                street,
                number,
                zipCode
            });
    
            return address;

        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }
}

export { CreateAddressUseCase }