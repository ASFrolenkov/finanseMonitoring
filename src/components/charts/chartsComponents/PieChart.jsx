import React, {useEffect, useState, useCallback} from 'react';
import { PieChart as WrapperChart, Pie, Cell } from 'recharts';
import renderActiveShape from '../../../assets/functions/renderActiveShape';
import monthSwitch from '../../../assets/functions/monthSwitch';
import upperCaseFirstLetter from '../../../assets/functions/upperCaseFirstLetter';
import { useAppSelector } from '../../../hooks/hooks';
import { dataSelector } from '../../../store/reducers/dataReducer';

const PieChart = () => {

    const {currentData} = useAppSelector(dataSelector)

    const date = new Date();
    const [monthNumber, setMonthNumber] = useState(date.getMonth());

    const [activeIndex, setActiveIndex] = useState(0);
    const [currentMonth, setCurrentMonth] = useState({}); 

    const colors = {
        transfer: '#e62290',
        cafes: '#ff8022',
        onlineMarkets: '#22aeb5',
        markets: '#1cb34b',
        subscriptions: '#00a3e9',
        education: '#a447a5',
        entertainment: '#ee161f',
    }

    useEffect(() => {
        setCurrentMonth(currentData.spending[monthNumber])
    }, [monthNumber, currentData])

    const onPieEnter = useCallback((_, index) => {
        setActiveIndex(index)
    }, [activeIndex])

    const monthStateHelper = (state, status) => {
        if (status === 'prev') {
            if (state === 0) {
                return 11
            }
            return state - 1
        }
        if (status === 'next') {
            if (state === 11) {
                return 0
            }
            return state + 1
        }
    }


    if (currentMonth.description) {
        return (
            <div className='mx-auto rounded-xl broder border-slate-300 shadow-md'>
                <div className='py-2 px-5 text-end text-xl rounded-xl broder border-slate-300 shadow'>
                    <div className='flex justify-end'>
                        <button onClick={() => {setMonthNumber(state => monthStateHelper(state, 'prev'))}}>{'<'}</button>
                        <h3 className='mx-3'>{upperCaseFirstLetter(monthSwitch(currentData.spending[monthNumber].month.slice(0, 3)))}</h3>
                        <button onClick={() => {setMonthNumber(state => monthStateHelper(state, 'next'))}}>{'>'}</button>
                    </div>
                    <h4>Траты за этот месяц: {currentData.spending[monthNumber].total}</h4>
                </div>
                
                <WrapperChart width={900} height={500}>
                    <Pie 
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={currentMonth.description} 
                        dataKey='value' 
                        nameKey='name'
                        innerRadius='70%'
                        outerRadius='80%'
                        paddingAngle={2}
                        onMouseEnter={onPieEnter}>
                            {currentMonth.description.map((entry, index) => {
                                return <Cell key={`cell-${index}`} fill={colors[entry.name]}/>
                            })}
                    </Pie>
                </WrapperChart>
            </div>
            
        )
    }

    return <div></div>
}

export default PieChart