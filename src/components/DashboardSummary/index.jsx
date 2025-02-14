import React from 'react';
import './index.css'

import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF4561', '#FFC260', '#72BF44', '#F28B28'];

const DashboardSummary = ({ incomeData, expenseData }) => (

  <div className="charts-container">
    <div className="chart-wrapper">
      <h2 className="chart-title">Income Sources</h2>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={incomeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#2f65ee" />
        </BarChart>
      </ResponsiveContainer>
    </div>

    <div className="chart-wrapper">
      <h2 className="chart-title">Spending Habits</h2>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={expenseData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {expenseData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default DashboardSummary;


