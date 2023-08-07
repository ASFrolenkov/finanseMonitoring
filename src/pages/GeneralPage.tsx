import React, {useEffect} from 'react'
import Header from '../components/Header';
import { useAppDispath } from '../hooks/hooks';
import { setAllDataToState } from '../store/reducers/dataReducer';
import data from '../data/data';

interface IProps {
    children: JSX.Element
}

const GeneralPage = ({children}: IProps) => {

    const dispath = useAppDispath();

    useEffect(() => {
        dispath(setAllDataToState({data}))
    }, [])

    return (
        <>
            <Header/>
            <section className='container mx-auto py-8'>
                {children}
            </section>
        </>
    )
}

export default GeneralPage