import React from 'react'
import NavigationLink from '../UI/NavigationLink'

const Navbar = () => {
    return (
        <div className='flex justify-around w-[300px]'>
            <NavigationLink to='/'>Главная</NavigationLink>
            <NavigationLink to='/payments'>Платежи и переводы</NavigationLink>
        </div>
    )
}

export default Navbar