import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface INavLink {
    children: string,
    to: string,
}

const NavigationLink: FC<INavLink> = ({children, to}) => {
    return (
        <Link 
            to={to}
            className='px-2 hover:shadow-md hover:bg-slate-100 rounded max-[767px]:text-center'>
            {children}
        </Link>
    )
}

export default NavigationLink