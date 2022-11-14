import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";

const ExpenseList = (props) => {
  // rendering the list
  const expenseListJsx = [];
  for (let index = 0; index < props.expenses.length; index++) {
    expenseListJsx.push(
      <ExpenseItem
        key={props.expenses[index].id}
        expense={props.expenses[index]}
      />
    );
  }

  return (
    <div className="mx-auto">
      <ExpenseFilter />
      {expenseListJsx}
    </div>
  );
};

export default ExpenseList;
