import React from 'react'
import monthSwitch from '../../../assets/functions/monthSwitch'

const CustomTooltip = ({payload, label, active}) => {
    if (active && label && payload) {
        return (
            <div className='bg-slate-50 p-3 border border-slate-300 rounded-xl shadow-md'>
                <p>{`Траты за ${monthSwitch(label)}: ${payload[0].value}`}</p>
            </div>
        )
    }

    return null
}

export default CustomTooltip