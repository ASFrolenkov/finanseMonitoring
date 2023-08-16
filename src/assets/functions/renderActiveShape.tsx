import React from 'react'
import { Sector } from 'recharts';
import nameSwitch from './nameSwitch';

interface IProps {
        cx: number,
        cy: number,
        midAngle: number,
        innerRadius: number,
        outerRadius: number,
        startAngle: number,
        endAngle: number,
        fill: string,
        payload: {name: string},
        percent: number,
        value: number,
}

const renderActiveShape = (props: IProps) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const textAnchor = cos >= 0 ? 'start' : 'end'

    return (
        <g>
            <text x={cx} y={cy + (window.innerWidth < 426 ? 105 : 0) + (window.innerWidth < 376 ? -30 : 0)} dy={11} textAnchor='middle' fill={fill} className='text-4xl 
                                                                                    max-[1280px]:text-2xl 
                                                                                    max-[767px]:text-xl 
                                                                                    max-[644px]:text-lg
                                                                                    max-[425px]:text-sm'>
                {nameSwitch(payload.name)}
            </text>
            <text x={cx} y={cy + 125 + (window.innerWidth < 376 ? -35 : 0)} dy={11} textAnchor='middle' fill={fill} className='hidden max-[425px]:block'>
                {`Траты: ${value} ₽`}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}/>
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 10}
                outerRadius={outerRadius + 15}
                fill={fill}/>
            <text
                x={sx + (cos >= 0 ? 1 : -1) * 15}
                y={sy + (sin >= 0 ? 1 : -1) * 20}
                textAnchor={textAnchor}
                fill='#000'
                className='max-[1023px]:hidden'>
                {`${nameSwitch(payload.name)}: ${value}`}
            </text>
            <text
                x={sx + (cos >= 0 ? 1 : -1) * 15}
                y={sy + (sin >= 0 ? 1 : -1) * 20}
                textAnchor={textAnchor}
                fill='#000'
                className='hidden max-[1023px]:block max-[425px]:hidden'>
                {`${value} ₽`}
            </text>
            <text
                x={sx + (cos >= 0 ? 1 : -1) * 25}
                y={sy + (sin >= 0 ? 1 : -1) * 20}
                dy={18}
                textAnchor={textAnchor}
                fill='#999'
                className='max-[425px]:hidden'>
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        </g>
    )
}

export default renderActiveShape