import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

interface IThemeContext {
	isDarkmode: boolean,
	toogleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({children}: PropsWithChildren) => {

	const [isDarkmode, setIsDarkmode] = useState(false);
	const theme = isDarkmode ? 'darkTheme' : '';

	const toogleTheme = () => {
		localStorage.setItem('@APP:theme', JSON.stringify((!isDarkmode)));
		setIsDarkmode(!isDarkmode);
	};

	useEffect(() => {
		const val = localStorage.getItem('@codechella:theme');
		if(val!== null)
			setIsDarkmode(JSON.parse(val));
	}, []); 
	
	return (
		<ThemeContext.Provider value={{isDarkmode, toogleTheme}}>
			<Helmet>
				<body className={theme}/>
			</Helmet>
			{children}
		</ThemeContext.Provider>
	);
};