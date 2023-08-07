import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/imgs/bank-low-resolution-logo-black-on-transparent-background.png'

const Logo = () => {
    return (
        <Link to='/'>
            <img 
                src={logo} 
                alt="logo"
                className='w-[100px]'/>
        </Link>
    )
}

export default Logo