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
            <text x={cx} y={cy} dy={11} textAnchor='middle' fill={fill} className='text-4xl'>
                {nameSwitch(payload.name)}
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
                fill='#000'>
                {`${nameSwitch(payload.name)}: ${value}`}
            </text>
            <text
                x={sx + (cos >= 0 ? 1 : -1) * 25}
                y={sy + (sin >= 0 ? 1 : -1) * 20}
                dy={18}
                textAnchor={textAnchor}
                fill='#999'>
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        </g>
    )
}

export default renderActiveShape