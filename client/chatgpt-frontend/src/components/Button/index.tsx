import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import './styles.css';
import Icons from '../Icons';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	icon?: string
}

const Button = ( {icon, children, className,...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
	return (
		<button 
			className={`
				Button 
				${className? className: ''}`} 
			{...props} >
			{icon && <Icons>{icon}</Icons>}
			{children}
		</button>
	);
};

export default Button;