import React from 'react';
import Navbar from './Navbar';
import Logo from '../UI/Logo';
import SearchInput from '../UI/SearchInput';
import UserBar from '../UI/UserBar';
import ExitBtn from '../UI/ExitBtn';
import logoutIcon from '../assets/imgs/logout.png'

const Header = () => {
    return (
        <div className='shadow-md'>
            <header 
                className='flex items-center justify-between container mx-auto py-3'>
                <Logo/>
                <Navbar/>
                <SearchInput/>
                <UserBar/>
                <ExitBtn>
                    <img src={logoutIcon} alt="logout" className='h-[25px] box-content p-2'/>
                </ExitBtn>
            </header>
        </div>
    )
}

export default Header