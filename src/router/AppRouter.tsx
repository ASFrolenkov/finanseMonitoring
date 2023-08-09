import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import { loginSelector } from '../store/reducers/loginSlice';
import { useAppSelector } from '../hooks/hooks';
import PaymentsPage from '../pages/PaymentsPage';
import Charts from '../components/Charts';
import GeneralPage from '../pages/GeneralPage';
import OperationsPage from '../pages/OperationsPage';

const AppRouter = () => {

	const {isAuth} = useAppSelector(loginSelector)

    return (
      	isAuth ?
		  	<GeneralPage>
				<Routes>
					<Route path='/' element={<Charts/>}/>
					<Route path='/payments' element={<PaymentsPage/>}/>
					<Route path='/operations' element={<OperationsPage/>}/>
					<Route path='*' element={<Navigate to='/' replace/>}/>
				</Routes>
			</GeneralPage>
			:
			<Routes>
				<Route path='/login' element={<LoginPage/>}/>
				<Route path='*' element={<Navigate to='/login' replace/>}/>
			</Routes>
    )
}

export default AppRouter