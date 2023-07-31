import { createContext, PropsWithChildren, useEffect, useState } from 'react';

interface IAuthContext {
	authenticated: boolean
	loading: boolean,
	user: any,
	signIn: (email: string, password: string) => Promise<boolean>,
	signOut: () => void,
	updateUser: (arg: {[key: string]: any}) => void,
	error: any
}


export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthProvider = ({children}: PropsWithChildren): JSX.Element => {
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() =>{
		const data = localStorage.getItem('@APP:user');
		
		if(data !== null){
			setUser(JSON.parse(data));
			setLoading(false);

			setTimeout(() => {
				signOut();
			}, 60000);
		}
		else
		{
			setLoading(false);
		}
	}, []);

	const signIn = async (email: string, password: string) => {
		
		setError('');

		if(email === 'admin@mail.com' && password === '123aSd7')
		{
			localStorage.setItem('@APP:user', JSON.stringify('admin') );
			setUser('admin');

			setTimeout(() => {
				signOut();
			}, 60000);
			
			return true;
		}
		else
		{
			setError('Wrong credentials');
			return false;
		}
	};

	const signOut = () => {
		// API.defaults.headers['Authorization'] = null;
		localStorage.removeItem('@APP:user');
		setUser(null);
	};

	const updateUser = (arg: {[key: string]: any}) => {
		setUser({...user!, ...arg});
	};
	
	return (
		<AuthContext.Provider value={{
			authenticated: !!user, updateUser, loading, user, signIn, signOut, error
		}}>
			{children}
		</AuthContext.Provider>
	);
};