import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const SalesGraph = () => {
  const salesData = useSelector(state => state.product.data[0].sales);

  // Create a new array from salesData and sort it
  const sortedData = [...salesData].sort((a, b) => new Date(a.weekEnding) - new Date(b.weekEnding));

  // Function to format the date into month names and year
  const formatDate = (date) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const d = new Date(date);
    return `${monthNames[d.getMonth()]} ${d.getFullYear()}`;
  };

  return (
    <div>
      <div className="graph-title">Retail Sales</div>
      <ResponsiveContainer width="100%" height={600}>
        <LineChart
          data={sortedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="weekEnding" tickFormatter={formatDate} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36}/>
          <Line type="monotone" dataKey="retailSales" stroke="#4285F4" strokeWidth={2} />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#888888" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesGraph;
