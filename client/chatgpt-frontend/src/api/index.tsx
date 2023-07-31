import axios from 'axios';

const URL_API = 'https://api.openai.com/v1/chat/completions';

export const makeRequest = async (message: string) => {	
	return axios.post(URL_API, config(message),
		{ headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env['REACT_APP_OPENAI_API_KEY']}`
		}});
};

const config = (prompt: string ) => {
	return {
		model: 'gpt-3.5-turbo',
		messages: [{ 
			role: 'user',
			content: `${prompt}`
		}],
		// temperature: 1,
		// max_tokens: 3500,
		// top_p: 1,
		// frequency_penalty: 0,
		// presence_penalty: 0,
	};
};