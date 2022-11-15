import React, { useState } from "react";

const ExpenseForm = (props) => {
  // User Inputs
  const [userExpenseTitle, setUserExpenseTitle] = useState("");
  const [userExpenseAmount, setUserExpenseAmount] = useState("");
  const [userExpenseDate, setUserExpenseDate] = useState("");

  // Lifts the data up a components
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const newExpenseToAdd = {
      id: Math.random().toString(),
      title: userExpenseTitle,
      amount: +userExpenseAmount,
      date: userExpenseDate,
    };

    // TODO: reset the values of the form

    props.onAddNewExpense(newExpenseToAdd);
  };

  return (
    <div className="mx-auto">
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="expense-name">Expense:</label>
        <input
          type="text"
          id="expense-name"
          onChange={(e) => setUserExpenseTitle(e.target.value)}
        />
        <label htmlFor="expense-amount">Amount:</label>
        <input
          type="number"
          id="expense-amount"
          onChange={(e) => setUserExpenseAmount(e.target.value)}
        />
        <label htmlFor="expense-date">Date:</label>
        <input
          type="date"
          id="expense-date"
          onChange={(e) => setUserExpenseDate(new Date(e.target.value))}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
