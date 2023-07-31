import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LocaleContextProvider } from '../context/locale.context';
import { AuthContext, AuthProvider } from '../context/auth.context';
import { ThemeProvider } from '../context/theme.context';


export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
	return (
		<BrowserRouter>
			<LocaleContextProvider>
				<AuthProvider>
					<ThemeProvider>
						{children}
					</ThemeProvider>
				</AuthProvider>
			</LocaleContextProvider>
		</BrowserRouter>
	);
};

export const AllTheProvidersAutheticated = ({children}: {children: React.ReactNode}) => {
	return (
		<BrowserRouter>
			<LocaleContextProvider>
				<AuthContext.Provider value={{user: 'admin', loading: false, authenticated: true, error: null, signIn: async () => false, signOut: () => console.debug('logout'), updateUser: () => console.debug('updateUser')}}>
					<ThemeProvider>
						{children}
					</ThemeProvider>
				</AuthContext.Provider>
			</LocaleContextProvider>
		</BrowserRouter>
	);
};