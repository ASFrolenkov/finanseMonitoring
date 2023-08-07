import React from 'react';
import AsideComp from './charts/asidecomp/AsideComp';

const ContentWrapper = ({children}: {children?: JSX.Element}) => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            <AsideComp/>
            {children}
        </div>
    )
}

export default ContentWrapper