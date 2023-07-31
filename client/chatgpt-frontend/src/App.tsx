import SideMenu from './objects/SideMenu';

import { FormEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import { IconButton, Text } from './components';
import Card from './components/Card';
import { makeRequest } from './api';
import {ReactComponent as Logo} from './assets/logo.svg';

const App = () => {

	const initialLog = {
		chatbot: true,
		message: 'Como posso te ajudar hoje?'
	};

	const [openModal, setOpenModal] = useState(false);
	const [submitEnable, setSubmitEnable] = useState(false);
	const [loading, setLoading] = useState(false);
	const [prompt, setPrompt] = useState('');
	const [chatlog, setChatlog] = useState([initialLog]);

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();
		
		setLoading(true);
		
		const response = await makeRequest(prompt);

		console.debug(response);

		if(response.status === 200)
		{
			const answer = response.data.choices[0].message.content;
			
			setChatlog(
				[
					...chatlog,
					{
						chatbot: false,
						message: prompt
					},
					{
						chatbot: true,
						message: answer
					}
				]
			);
		}

		setLoading(false);
		setPrompt('');
	};

	const dialogRef = useRef(null);

	useEffect(() => {
		if(openModal)
		{
			(dialogRef.current! as HTMLDialogElement).showModal();
		}
		else
		{
			(dialogRef.current! as HTMLDialogElement).close();
		}
	},[openModal]);

	useEffect(() => {
		setSubmitEnable(prompt!== '');
	}, [prompt]);

	return (
		<>
			<header className='App-header flex-row space-between'>
				<IconButton color='transparent' onClick={() => setOpenModal(!openModal)}>menu</IconButton>
				<Text>Novo Chat</Text>
				<Logo/>
			</header>
			<main className='App'>
				<div className='App-chatlog' role='log'>
					{
						chatlog.map((log, index) =>
							<Card
								key={index}
								chatbot={log.chatbot}
							>
								{log.message}
							
							</Card>
						)
					}
				</div>
			</main>
			<footer>
				<div className='App-chatbox'>
					<form className='App-chatform' onSubmit={handleSubmit}>
						<div className='flex-row'>
							<input
								disabled={loading}
								className='App-chatinput'
								type="text"
								value={prompt}
								onChange={(event) => setPrompt(event.target.value)}
							/>
							<IconButton disabled={!submitEnable || loading} className='App-chatform-icon'>send</IconButton>
						</div>
					</form>
				</div>
			</footer>
			<dialog ref={dialogRef} className='App-dialog' onClose={() => setOpenModal(false)}>
				<SideMenu onClose={() => setOpenModal(false)} onAdd={() => {
					setOpenModal(false);
					setChatlog([initialLog]);
				}}/>
			</dialog>
		</>
	);
};

export default App;