import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CustomTooltip from './customTooltip';
import { useAppSelector } from '../../../hooks/hooks';
import { dataSelector } from '../../../store/reducers/dataReducer';
import monthSwitch from '../../../assets/functions/monthSwitch';
import upperCaseFirstLetter from '../../../assets/functions/upperCaseFirstLetter';
import { responsiveWidth } from '../../../assets/functions/responsiveWidth';
import { responsiveHeight } from '../../../assets/functions/responsiveHeight';

const LineChart = () => {
    const windowWidth = window.innerWidth

    const {currentData} = useAppSelector(dataSelector);

    let editedArr = []

    if (currentData) {
        if (currentData.spending) {
            editedArr = currentData.spending.map(elem => {
                if (elem.month.length >= 3) {
                    return {...elem, month: upperCaseFirstLetter(monthSwitch(elem.month.slice(0, 3))).slice(0, 3)}
                }
                return {...elem}
            });
        }
    }
    
    return (
        <AreaChart width={responsiveWidth(windowWidth)} height={responsiveHeight(windowWidth)} data={editedArr} margin={{top: 10, right: 10}} className='mx-auto'>
            <defs>
                <linearGradient id='colorSpending' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
            <XAxis dataKey="month" interval="preserveEnd" tickSize={10}/>
            <YAxis/>
            <Tooltip content={<CustomTooltip/>}/>
            <Area type="monotone" dataKey="total" stroke='#8884d8' fillOpacity={1} fill='url(#colorSpending)'/>
        </AreaChart>
    )
}

export default LineChart