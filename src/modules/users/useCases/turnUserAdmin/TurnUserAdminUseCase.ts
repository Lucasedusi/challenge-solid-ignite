/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
	user_id: string;
}

class TurnUserAdminUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ user_id }: IRequest): User {
		const userAdmin = this.usersRepository.findById(user_id);

		if (userAdmin) {
			throw new Error("User not exist");
		}

		const user = this.usersRepository.turnAdmin(userAdmin);

		return user;
	}
}

export { TurnUserAdminUseCase };
