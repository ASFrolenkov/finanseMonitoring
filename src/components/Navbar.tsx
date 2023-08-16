import React from 'react'
import NavigationLink from '../UI/NavigationLink'

const Navbar = () => {
    return (
        <div className='flex justify-around w-[400px] max-[1023px]:w-[350px] max-[767px]:w-[250px] max-[644px]:mx-auto max-[644px]:w-auto max-[644px]:py-4'>
            <NavigationLink to='/'>Главная</NavigationLink>
            <NavigationLink to='/payments'>Платежи и переводы</NavigationLink>
            <NavigationLink to='/operations'>История</NavigationLink>
        </div>
    )
}

export default Navbar