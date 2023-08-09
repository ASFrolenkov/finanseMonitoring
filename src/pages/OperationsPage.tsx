import React from 'react'
import { borderClassName } from '../assets/styleVariables'
import { useAppSelector } from '../hooks/hooks'
import { dataSelector } from '../store/reducers/dataReducer'
import CardItem from '../UI/CardItem'
import { ISingleDataElem } from '../store/reducers/dataReducer'
import nameSwitch from '../assets/functions/nameSwitch'

const OperationsPage = () => {
    const curMonth = new Date().getMonth();
    const curYear = new Date().getFullYear();
    const {allData, currentData} = useAppSelector(dataSelector);

    const curMonthOperations = currentData?.spending[curMonth].operations;
    
    const monthHelper = (month: number) => {
        if (month < 10) {
            return `0${month}`
        };
        return month
    };

    return (
        <div className={`p-5 text-center ${borderClassName}`}>
            <ul className='flex justify-center gap-5'>
                {allData.map((elem: ISingleDataElem) => (
                    <CardItem
                            balance={elem.balance}
                            cardNumber={elem.cardNumber}
                            id={elem.id}
                            key={elem.id}/>
                ))}
            </ul>
            <div>
                <h2 className='text-xl my-5'>Операции в данный месяц:</h2>
                {
                    curMonthOperations ? 
                                        <ul>
                                            {curMonthOperations?.map((elem: any) => (
                                                <li className={`w-[250px] my-3 mx-auto p-2 text-lg ${borderClassName}`}>
                                                    <div>{`${nameSwitch(elem.name)}: -${elem.value}₽ `}</div>
                                                    <hr />
                                                    <div>{`${elem.date} : ${monthHelper(curMonth + 1)} : ${curYear}`}</div>
                                                </li>
                                            ))}
                                        </ul>
                                        :
                                        <div className={`w-[300px] p-3 mx-auto ${borderClassName}`}>
                                            <p className='text-slate-400'>Операций в данном месяце еще не было</p>
                                        </div>
                }
            </div>
        </div>
    )
}

export default OperationsPage