import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import pt_BR from '../l10n/pt-BR.json';


interface ILocaleContext {
	locale: string;
	resources: typeof pt_BR
	updateLocale: (locale: string) => void
}

export const LocaleContext = createContext<ILocaleContext>({} as ILocaleContext);

export const LocaleContextProvider = ({ children }: PropsWithChildren) => {
	const [ locale, setLocale ] = useState('pt-BR');
	const [ resources, setResources ] = useState(pt_BR);

	const updateLocale = (locale: string) => {
		setLocale(locale);
		localStorage.setItem('@APP:locale', locale);
	};

	useEffect(() => {

		switch (locale){
		case 'pt-BR':
			setResources(pt_BR);
			break;	
		}

	}, [locale]);

	useEffect(() => {
		const val = localStorage.getItem('@APP:locale');
		if(val!== null)
			setLocale(val);

		console.debug(resources);
	}, []); 


	return (
		<LocaleContext.Provider value={{locale, resources, updateLocale}}>
			{children}
		</LocaleContext.Provider>
	);
};
