"use client"
import { composedData } from '@/utils/data';
import { Eye } from 'lucide-react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const ComposedChart2 = () => {
  return (
    <div  className='col-span-12 lg:col-span-4 overflow-hidden rounded border border-stone-800 '  >

        <div  className='py-4 px-2' >
            <h3  className='flex items-center gap-1.5 font-medium' >
                <Eye/>  Usage
            </h3>
        </div>

        <Chart/>
    </div>
  )
}
export default ComposedChart2




const Chart = ()=> {
    return (
        <div  className='h-64 px-2'  >
             <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={composedData}
          margin={{
            top: 20,
            // right: 0,
            bottom: 20,
            // left: 0,
          }}
        >
          {/* <CartesianGrid stroke="#f5f5f5" /> */}
          <XAxis dataKey="name" scale="band"  
          className='text-xs'
          />
          <YAxis   
          className='text-xs'
          />
          <Tooltip
  contentStyle={{
    backgroundColor: '#000', 
    border: '1px solid #000', 
    color: '#f9fafb', 
    borderRadius: '8px',
    fontSize: '0.875rem',
  }}
  labelStyle={{ color: '#f9fafb' }}
  itemStyle={{ color: '#f9fafb' }}
/>
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
        </div>
    )
}