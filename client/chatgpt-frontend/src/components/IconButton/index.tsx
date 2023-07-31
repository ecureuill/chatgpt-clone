import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import './styles.css';
import Icons from '../Icons';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	color?: 'green' | 'transparent'
}


const IconButton = ( {color = 'green', children, className,...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
	return (
		<button 
			className={`
				IconButton IconButton--${color}
				${className? className: ''}`} 
			{...props} >
			<Icons>
				{children}
			</Icons>
		</button>
	);
};

export default IconButton;