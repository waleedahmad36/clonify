"use client";
import { activityData } from "@/utils/data";
import { User } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
//   CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ActivityGraph = () => {
  return (
    <div className="col-span-12 lg:col-span-8 overflow-hidden rounded border border-stone-800">
      <div className="p-4">
        <h3 className="flex items-center gap-1 5 font-medium">
          <User /> Activity
        </h3>
      </div>

      {/* Graph */}
      <Graph />
    </div>
  );
};
export default ActivityGraph;

const Graph = () => {
  return (
    <div className="h-64 px-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={activityData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            dataKey="name"
            className="text-xs"
            //   padding={{ left: 30, right: 30 }}
          />
          <YAxis className="text-xs" />
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
         <Area
  type="monotone"
  dataKey="uv"
  stackId="1"
  stroke="#27005D"
  fill="#4300FF"
/>
<Area
  type="monotone"
  dataKey="pv"
  stackId="1"
  stroke="#DD58D6"
  fill="#FF2DF1"
/>
<Area
  type="monotone"
  dataKey="amt"
  stackId="1"
  stroke="#B6FFFA"
  fill="#45FFCA"
/>

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};
