import React from "react";

export const ExpenseItem = (props) => {
  const { expense } = props;
  const month = expense.date.toLocaleString("en-US", { month: "long" });
  const year = expense.date.toLocaleString("en-US", { year: "numeric" });
  const day = expense.date.toLocaleString("en-US", { month: "2-digit" });
  return (
    <li className="bg-amber-500 border-y-fuchsia-800 flex content-center rounded-lg justify-between mx-auto container space-x-10 my-1">
      <div id="date" className="text-yellow-50 p-3 rounded-lg inline-block">
        <p>{month}</p>
        <p>{year}</p>
        <p>{day}</p>
      </div>
      <div className="my-auto text-yellow-50 p-3 rounded-lg ">
        <p className="">{expense.title}</p>
      </div>
      <div className="my-auto text-yellow-50 p-3 rounded-lg inline-block">
        <p>${expense.amount}</p>
      </div>
    </li>
  );
};
