import React, {useState} from 'react';
import LineChart from '../chartsComponents/LineChart.jsx';
import PieChart from '../chartsComponents/PieChart.jsx';
import lineIcon from '../../../assets/imgs/icon-graph.png'
import pieIcon from '../../../assets/imgs/icon-donut.png'

const ChartContent = () => {
    const [content, setContent] = useState('line');

    return (
        <div className='col-span-3 p-5 border border-slate-200 rounded-xl shadow-md flex flex-col justify-between items-end'>
            <div  className='mb-5 border border-slate-200 rounded-xl shadow-lg'>
                <button 
                    onClick={() => {setContent('line')}}
                    className={`p-2 border-r border-dashed border-slate-400 rounded-l-xl transition ${content !== 'line' && 'bg-slate-300 hover:bg-slate-200 hover:transition-colors'}`}>
                        <img src={lineIcon} alt="line-chart" />
                </button>

                <button 
                    onClick={() => {setContent('pie')}}
                    className={`p-2 border-l border-dashed border-slate-400 rounded-r-xl transition ${content !== 'pie' && 'bg-slate-300 hover:bg-slate-200 hover:transition-colors'}`}>
                        <img src={pieIcon} alt="pie-chart" />
                </button>
            </div>
            {content === 'line' && <LineChart/>}
            {content === 'pie' && <PieChart/>}
        </div>
    )
}

export default ChartContent