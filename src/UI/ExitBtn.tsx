import React from 'react'
import { useAppDispath } from '../hooks/hooks'
import { setLoginFlagFalse } from '../store/reducers/loginSlice'

const ExitBtn = ({children}: any) => {

    const dispath = useAppDispath();

    const clickHandler = () => {
        dispath(setLoginFlagFalse()) 
        localStorage.removeItem('isAuth');
    }
     
    return (
        <button onClick={clickHandler}>
            {children}
        </button>
    )
}

export default ExitBtn