import models from "../../models";

class ListUsersUseCase {
    async execute() {
        const users = await models.users.findAll();
        return users;
    }
}

export { ListUsersUseCase }