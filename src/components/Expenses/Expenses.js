import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

export default function Expenses({ items }) {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterYearHandler = ({ target: { value } }) => {
    setFilteredYear(value);
  };
  const filteredExpenses = items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onFilterYear={filterYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}
