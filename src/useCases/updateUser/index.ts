import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";	

const updateUserUseCase = new UpdateUserUseCase();
const updateUser = new UpdateUserController(updateUserUseCase);

export { updateUser }