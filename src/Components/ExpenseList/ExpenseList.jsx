import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import { ExpenseItem } from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div className="mx-auto">
      <ExpenseFilter />
      <ExpenseItem expense={props.expenses[1]} />
    </div>
  );
};

export default ExpenseList;
