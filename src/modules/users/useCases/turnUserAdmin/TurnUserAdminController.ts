/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
	constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

	handle(request: Request, response: Response): Response {
		const { user_id } = request.params;

		try {
			const user = this.turnUserAdminUseCase.execute({
				user_id: String(user_id),
			});

			return response.json(user);
		} catch (Error) {
			return response.status(404).json({ error: Error });
		}
	}
}

export { TurnUserAdminController };
