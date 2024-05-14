import React, { useState } from 'react';

const IncomeForm = ({ setWalletBalance }) => {
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!income) return;
    setWalletBalance((prevBalance) => prevBalance + parseFloat(income));
    setIncome('');
  };

  return (
    <div className="income-form">
      <h2>Add Income</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Income Amount"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <button type="submit">Add Income</button>
      </form>
    </div>
  );
};

export default IncomeForm;