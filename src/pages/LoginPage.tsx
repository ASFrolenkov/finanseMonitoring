import React, {useState} from 'react'
import CustomInput from '../UI/CustomInput'
import { useAppDispath } from '../hooks/hooks';
import { setLoginFlagTrue } from '../store/reducers/loginSlice';
import logo from '../assets/imgs/bank-low-resolution-logo-black-on-transparent-background.png'

const LoginPage = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginErr, setLoginErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    const dispath = useAppDispath();

    const loginHandler = (e: any) => {
        e.preventDefault();

        setLoginErr('');
        setPasswordErr('');

        if ((login === '') || (login !== 'admin')) {
            login === '' ? setLoginErr('Введите логин') : setLoginErr('Неверный логин') 
        }

        if ((password === '') || (password !== 'admin')) {
            password === '' ? setPasswordErr('Введите пароль') : setPasswordErr('Неверный пароль') 
        }

        if ((login === 'admin') && (password === 'admin')) {
            dispath(setLoginFlagTrue());
            localStorage.setItem('isAuth', 'true');
        }
        return;
    }

    const loginInputClassNames = 'w-96 h-10 px-4 border rounded-xl shadow-slate-300 shadow-md'

    return (
        <div className='h-screen'>
            <div className='flex flex-col justify-center items-center h-3/4'>
                <img src={logo} alt="logo" className='w-[300px] mx-auto'/>
                
                <form method='post' className='flex flex-col mt-8'>
                    <CustomInput 
                        type='text'
                        className={loginInputClassNames}
                        required
                        value={login}
                        onChange={(e: any) => {setLogin(e.target.value)}}>
                            {loginErr && <p className='text-center text-red-500'>{loginErr}</p>}
                    </CustomInput>

                    <CustomInput 
                        type='password'
                        className={loginInputClassNames}
                        required
                        value={password}
                        onChange={(e: any) => {setPassword(e.target.value)}}>
                            {passwordErr && <p className='text-center text-red-500'>{passwordErr}</p>}
                    </CustomInput>
                    
                    {/*<CustomInput
                            type='submit'
                            className='mt-5 mx-auto p-2 w-48 border rounded-xl shadow-md shadow-slate-300 transition hover:bg-slate-200'/> */}

                    <button 
                        className='mt-5 mx-auto p-2 w-48 border rounded-xl shadow-md shadow-slate-300 transition hover:bg-slate-200'
                        onClick={loginHandler}>Войти</button>

                    <div className='text-sm text-center mt-2 text-slate-400'>Логин: admin | Пароль: admin</div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage