import React from 'react'
import { borderClassName, cardSize } from '../assets/styleVariables'
import { ICardItemProps } from './CardItem'
import cardIcon from '../assets/imgs/atm-card.png'

const PaymentsCardItem = ({balance, cardNumber, id, itemIndex}: ICardItemProps) => {
    return (
        <div className={`p-4 text-center flex flex-col justify-center ${cardSize} ${borderClassName}`}>
            <div className='flex items-center'>
                <img src={cardIcon} alt="cardIcon" className='w-[50px] mr-4'/>
                <p className='text-2xl max-[767px]:text-xl'>{`Баланс: ${balance} ₽`}</p>
            </div>
            <p className='text-slate-400 text-sm'>{`Карта ** ${(cardNumber).toString().slice(-4)}`}</p>
        </div>
    )
}

export default PaymentsCardItem