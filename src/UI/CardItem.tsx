import React from 'react'
import cardIcon from '../assets/imgs/atm-card.png';
import { useAppSelector, useAppDispath } from '../hooks/hooks';
import { dataSelector } from '../store/reducers/dataReducer';
import { setCurrentDataAndId } from '../store/reducers/dataReducer';
import { borderClassName } from '../assets/styleVariables';

export interface ICardItemProps {
    id: number | string,
    cardNumber: number,
    balance: number,
    itemIndex?: number
}

const CardItem = ({id, cardNumber = 1000, balance = 1000, itemIndex}: ICardItemProps) => {

    const {currentDataId} = useAppSelector(dataSelector);
    const dispatch = useAppDispath();

    const currentCard = currentDataId === id

    const changeCurrentDataInState = () => {
        dispatch(setCurrentDataAndId(id))
    }

    return (
        <li  className={`
                        mb-3 
                        p-4 
                        ${borderClassName}
                        ${!currentCard && 'bg-slate-300 hover:bg-slate-200 transition'}`}>
            <button 
                className='flex w-full items-center max-[1024px]:flex-col'
                onClick={changeCurrentDataInState}>
                <img src={cardIcon} alt="card-icon" className='w-[50px] h-[50px] mr-6 max-[1024px]:mr-0'/>
                <div className='text-left max-[1024px]:text-center'>
                    <p className='text-xl'>{balance} ₽</p>
                    <p className='text-xs text-slate-400'>Номер карты ** {cardNumber.toString().slice(-4)}</p>
                </div>
            </button>                            
        </li>

        
    )
}

export default CardItem