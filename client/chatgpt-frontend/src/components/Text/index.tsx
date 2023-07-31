import { HTMLAttributes } from 'react';
import './styles.css';

interface TextProps extends HTMLAttributes<HTMLElement> {
	variant?: 'title' | 'paragraph';
	size?: 'tiny' | 'small' | 'medium';
	bold?: true
}

const Text = ( {variant, size, children, className, bold, ...props}: React.PropsWithChildren<TextProps>): JSX.Element => {
	const styles = `Text ${className? className: ''}`;

	switch(variant){
	case 'title':
		return (
			<h1 className={`${styles} Text--heading Text--${size === undefined? 'big': size}`} {...props}>
				{children}
			</h1>
		);
	
	case 'paragraph':
		return(
			<p className={`${styles} ${bold !== undefined ? 'Text--bold': ''} Text--${size === undefined? 'small': size}`} {...props}>
				{children}
			</p>
		);
	
	default:
		return(
			<span className={`${styles} ${bold !== undefined ? 'Text--bold': ''} Text--${size === undefined? 'small': size}`} {...props}>
				{children}
			</span>
		);	
	}
};

export default Text;