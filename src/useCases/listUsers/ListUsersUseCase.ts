import models from "../../models";

class ListUsersUseCase {
    async execute( limit: number, page: number, order: any ) {
        try {
            const [ field, orderType ] = order.split(":");

            const users = await models.users.findAll({
                offset: (page - 1) * limit,
                limit: limit,
                order: [[field, orderType === '0' ? 'DESC' : 'ASC']]
            });
            
            return users;
        } catch (err) {
            console.error("An error occurred while loading user's database:", err);
            throw err;
        }
    }
}

export { ListUsersUseCase }