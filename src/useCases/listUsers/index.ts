import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from "./ListUsersController";

const listUsersUseCase = new ListUsersUseCase();
const listUsers = new ListUsersController(listUsersUseCase);

export { listUsers }