import { useState, React } from "react";
import "../public/css/main.css";
import ExpenseForm from "./Components/ExpenseForm/ExpenseForm";
import ExpenseList from "./Components/ExpenseList/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2022, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2022, 5, 12),
    },
  ]);
  return (
    <div className="flex flex-col h-screen">
      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
