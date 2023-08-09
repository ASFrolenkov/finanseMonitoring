import React from 'react'
import NavigationLink from '../UI/NavigationLink'

const Navbar = () => {
    return (
        <div className='flex justify-around w-[400px]'>
            <NavigationLink to='/'>Главная</NavigationLink>
            <NavigationLink to='/payments'>Платежи и переводы</NavigationLink>
            <NavigationLink to='/operations'>История</NavigationLink>
        </div>
    )
}

export default Navbar