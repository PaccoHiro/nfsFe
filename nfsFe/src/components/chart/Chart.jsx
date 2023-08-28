import "./chart.scss";
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const Chart = () => {
  const data = [
    { month: "January", revenue: 10 },
    { month: "February", revenue: 20 },
    { month: "March", revenue: 25 },
    { month: "April", revenue: 15 },
    { month: "May", revenue: 30 },
    { month: "June", revenue: 9 },
  ];
  return (
    <div className="chart">
      <div className="title">last six months</div>
      <div className="chartcon">
        <div className="respchart">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              // width={730}
              // height={250}
              data={data}
              margin={{ top: 5, right: 15, left: 10, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorrevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />

              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip wrapperStyle={{ zIndex: -1000 }} />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorrevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
export default Chart;
