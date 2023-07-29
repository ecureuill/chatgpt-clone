import { Request, Response, Router } from "express";
import PromptController from "../controllers/prompt.controller";

const router = Router();

router.get('/ping', (request: Request, response: Response) => {
	return response.json({
		pong: {
			params: request.params,
			body: request.body
		}
	});
});

router.post('/api/prompt', PromptController.sendText)
export default router;