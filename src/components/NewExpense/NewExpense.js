import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { v4 } from "uuid";
import { useState } from "react";
("uuid");

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (userInput) => {
    const expenseData = {
      ...userInput,
      id: v4()
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };
  const addNewExpenseHandler = () => {
    setIsEditing(true);
  };
  const cancelHandler = () => {
    setIsEditing(false);
  };
  const addFormContent = isEditing ? (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={cancelHandler}
    />
  ) : (
    <button onClick={addNewExpenseHandler}>Add New Expense</button>
  );

  return <div className="new-expense">{addFormContent}</div>;
};

export default NewExpense;
