import React from 'react';
import Navbar from './Navbar';
import Logo from '../UI/Logo';
import SearchInput from '../UI/SearchInput';
import UserBar from '../UI/UserBar';
import ExitBtn from '../UI/ExitBtn';
import logoutIcon from '../assets/imgs/logout.png'

const Header = () => {
    const widthFlag = window.innerWidth < 645

    return (
        <div>
            <header 
                className='flex items-center justify-between shadow-md container mx-auto py-3 max-[1280px]:px-5 max-[644px]:justify-around'>
                <Logo/>
                {!widthFlag && <Navbar/>} 
                <SearchInput/>
                <UserBar/>
                <ExitBtn>
                    <img src={logoutIcon} alt="logout" className='h-[25px] box-content p-2'/>
                </ExitBtn>
            </header>
            <div className='shadow-md text-center max-[321px]:text-sm'>
                {widthFlag && <Navbar/>} 
            </div> 
        </div>
    )
}

export default Header