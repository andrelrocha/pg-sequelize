import model from "../../models";

class UpdateUserUseCase {
    async execute(email: string, name: string, id: string) {
        try {


            if (!email || !name) {
                const err = new Error("One or more parameters are missing. Email and name are required");
                throw err;
            }

            const userExists = await model.users.findOne({ where: { id } });

            if (!userExists) {
                throw new Error("User not found in our database");
            }

            const user = await model.users.update({ name, email }, { where: { id } });

            return user;

        } catch (error) {
            console.error("An error occurred while updating user's database:", error);
            throw error;
        }
    }
}

export { UpdateUserUseCase }