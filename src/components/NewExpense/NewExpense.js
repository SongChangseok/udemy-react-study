import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { v4 } from "uuid";
("uuid");

const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (userInput) => {
    const expenseData = {
      ...userInput,
      id: v4()
    };
    onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
