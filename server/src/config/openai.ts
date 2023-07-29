import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from ".";

class openai {
	static configuration(){
		const configuration = new Configuration({
			apiKey: OPENAI_API_KEY,
		});

		return new OpenAIApi(configuration); 
	}

	static textCompletion(prompt: string ){
		return {
			model: "text-davinci-003",
			prompt: `${prompt}`,
			temperature: 1,
			max_tokens: 3500,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		}
	}
}

export default openai;