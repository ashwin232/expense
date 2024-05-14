import React, { useState, useEffect } from 'react';
import ExpenseForm from './Components/ExpenseForm/ExpenseForm';
import IncomeForm from './Components/IncomeForm/IncomeForm';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import ExpenseSummary from './Components/ExpenseSummary/ExpenseSummary';
import ExpenseTrends from './Components/ExpenseTrends/ExpenseTrends';

const App = () => {
  const [walletBalance, setWalletBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);

  // Load expenses from localStorage on component mount
  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    setExpenses(savedExpenses);
  }, []);

  // Update localStorage when expenses change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Add expense
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
    setWalletBalance(walletBalance - expense.amount);
  };

  // Edit expense
  const editExpense = (id, updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
  };

  // Delete expense
  const deleteExpense = (id) => {
    const deletedExpense = expenses.find((expense) => expense.id === id);
    setWalletBalance(walletBalance + deletedExpense.amount);
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <div>
        <h2>Wallet Balance: ${walletBalance}</h2>
      </div>
      <IncomeForm setWalletBalance={setWalletBalance} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList
        expenses={expenses}
        editExpense={editExpense}
        deleteExpense={deleteExpense}
      />
      <ExpenseSummary expenses={expenses} />
      <ExpenseTrends expenses={expenses} />
    </div>
  );
};

export default App;