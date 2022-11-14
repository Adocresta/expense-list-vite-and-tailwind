import React from "react";

const ExpenseFilter = () => {
  return (
    <select
      className="flex content-center ml-auto space-x-0 mb-10"
      name="year"
      id="year"
    >
      <option value="2022">2022</option>
    </select>
  );
};

export default ExpenseFilter;
