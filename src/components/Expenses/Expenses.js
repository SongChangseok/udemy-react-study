import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ items }) {
  return (
    <Card className="expenses">
      {items.map((value) => (
        <ExpenseItem key={value.id} {...value} />
      ))}
    </Card>
  );
}
