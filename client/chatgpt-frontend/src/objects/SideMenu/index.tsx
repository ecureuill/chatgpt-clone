import { Button, Text } from '../../components';
import IconButton from '../../components/IconButton';
import './styles.css';

type SideMenuProps = {
	open?: boolean
	onClose: () => void
	onAdd: () => void
}

const SideMenu = ({open=true, onClose, onAdd}: SideMenuProps) : JSX.Element => {
	return (
		<aside className={`SideMenu ${open? 'SideMenu--opened': 'SideMenu--closed'}`}>
			<IconButton color='transparent' className='SideMenu-icon' onClick={onClose}>
				close
			</IconButton>
			<nav>
				<Button icon='add' onClick={onAdd}>
					<Text>Novo Chat</Text>            
				</Button>
			</nav>
		</aside>
	);
};

export default SideMenu;