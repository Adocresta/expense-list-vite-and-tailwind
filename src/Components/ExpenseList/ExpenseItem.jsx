import React from "react";

export const ExpenseItem = (props) => {
  const { expense } = props;
  const month = expense.date.toLocaleString("en-US", { month: "long" });
  const year = expense.date.toLocaleString("en-US", { year: "numeric" });
  const day = expense.date.toLocaleString("en-US", { month: "2-digit" });
  return (
    <div className="bg-fuchsia-600 flex content-center rounded-lg justify-between mx-auto container space-x-10 my-1">
      <div
        id="date"
        className="bg-fuchsia-600 border-solid border-4 border-black text-yellow-50 p-3 rounded-lg inline-block"
      >
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </div>
      <div className="bg-fuchsia-600  text-yellow-50 p-3 rounded-lg inline-block">
        {expense.title}
      </div>
      <div className="bg-fuchsia-600 border-solid border-4 border-black text-yellow-50 p-3 rounded-lg inline-block">
        {expense.amount}
      </div>
    </div>
  );
};
