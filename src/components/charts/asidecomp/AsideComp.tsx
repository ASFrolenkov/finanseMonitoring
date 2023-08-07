import React from 'react'
import CardItem from '../../../UI/CardItem'
import { useAppSelector } from '../../../hooks/hooks'
import { dataSelector } from '../../../store/reducers/dataReducer'
import { ISingleDataElem } from '../../../store/reducers/dataReducer'

const AsideComp = () => {

    const {allData} = useAppSelector(dataSelector)

    if (allData) {
        return (
            <aside className='col-span-1'>
                <ul className='text-black'>
                    {allData.map((elem: ISingleDataElem, index: number) => <CardItem 
                                                    itemIndex={index} 
                                                    key={elem.id} 
                                                    id={elem.id} 
                                                    cardNumber={elem.cardNumber} 
                                                    balance={elem.balance}/>)}    
                </ul>
            </aside>
        )
    }
    return <></>
}

export default AsideComp