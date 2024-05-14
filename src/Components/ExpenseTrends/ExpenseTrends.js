import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const ExpenseTrends = ({ expenses }) => {
  // Calculate expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Prepare data for BarChart
  const barChartData = Object.keys(expensesByCategory).map((category) => ({
    name: category,
    amount: expensesByCategory[category],
  }));

  return (
    <div className="expense-trends">
      <h2>Expense Trends</h2>
      <BarChart width={600} height={300} data={barChartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default ExpenseTrends;