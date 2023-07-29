import { Request, Response } from 'express';
import openai from '../config/openai';
import InputPrompt from '../models/InputPrompt';

export default class PromptController {

	static async sendText(request: Request, response: Response) {
		const openaiAPI = openai.configuration();

		const entity = new InputPrompt(request.body)

		try {
			const res = await openaiAPI.createCompletion(
				openai.textCompletion(entity.prompt)
			);
			
			return response.status(200).json({
				success: true,
				data: res.data.choices[0]
			})
		} catch (error: any) {
			return response.status(400).json({
				sucess: false,
				error: error.response ? error.response : "There was an issue on the server"
			})
		}
	}
}