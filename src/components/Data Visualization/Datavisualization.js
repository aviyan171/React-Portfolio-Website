
import React, { useState } from 'react'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip} from 'recharts'
import { datasets } from '../dataset'
export default function Datavisualization() {
    

  return (
    <div>
      <ResponsiveContainer width='100%' aspect={3}>
        <LineChart data={datasets} margin={{right:200}}>
            <CartesianGrid/>
             
            <XAxis dataKey="Date" interval={'preserveStartEnd'} />
            <YAxis/>
            <Tooltip/>
            <Line dataKey='SalesCount' stroke='green'/>
            <Legend/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
