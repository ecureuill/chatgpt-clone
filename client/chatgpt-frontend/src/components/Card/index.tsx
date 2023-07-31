import IconButton from '../IconButton';
import './styles.css';
import {ReactComponent as Avatar} from '../../assets/logo.svg';
import Icons from '../Icons';
import { PropsWithChildren, useState } from 'react';

type CardProps = {
    chatbot: boolean
}

const Card = ({children, chatbot}: PropsWithChildren<CardProps>): JSX.Element => {

	const [up, setUp] = useState<boolean|undefined>(undefined);
	const [down, setDown] = useState<boolean|undefined>(undefined);

	return (
		<div className="Card flex-row">
			<div className="Card-avatar flex-col all-center">
				{
					chatbot?
						<Avatar/>
						:
						<Icons>person</Icons>
				}
			</div>
			<div className="Card-body">
				{children}
			</div>
			<div className="Card-actions flex-row">
				{
					chatbot && 
					<>
						<IconButton color='transparent' className={`${up === true? 'Card-actionUp-active': ''}`} onClick={() => {
							setUp(true);
							setDown(false);
						}}
						>thumb_up_alt</IconButton>
						<IconButton color='transparent' className={`${down === true? 'Card-actionDown-active': ''}`} onClick={() => {
							setDown(true);
							setUp(false);
						}}
						>thumb_down_alt</IconButton>
					</>
				}
			</div>
		</div>
	);
};

export default Card;