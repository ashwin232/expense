import React from 'react';
import { PieChart, Pie, Tooltip } from 'recharts';

const ExpenseSummary = ({ expenses }) => {
  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // Calculate expenses by category
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  // Prepare data for PieChart
  const pieChartData = Object.keys(expensesByCategory).map((category) => ({
    name: category,
    value: expensesByCategory[category],
  }));

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <p>Total Expenses: ${totalExpenses}</p>
      <PieChart width={400} height={400}>
        <Pie dataKey="value" data={pieChartData} cx={200} cy={200} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpenseSummary;