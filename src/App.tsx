import React from 'react';
import AppRouter from './router/AppRouter';
import { useAppDispath } from './hooks/hooks';
import { setLoginFlagTrue } from './store/reducers/loginSlice';

const App = () => {

	const dispath = useAppDispath();

	if (localStorage.getItem('isAuth')) {
		dispath(setLoginFlagTrue());
	}

    return (
		<>
			<AppRouter/>
		</>
    )
}

export default App
