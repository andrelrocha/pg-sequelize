import { CreateAddressUseCase } from "./CreateAddressUseCase";
import { CreateAddressController } from "./CreateAddressController";

const createAddressUseCase = new CreateAddressUseCase();
const createAddress = new CreateAddressController(createAddressUseCase);

export { createAddress }