import { useState } from "react";
import "./ExpenseForm.css";

const initUserInput = {
  title: "",
  amount: "",
  date: ""
};

const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  //   const [title, setTitle] = useState();
  //   const [amount, setAmount] = useState();
  //   const [date, setDate] = useState();
  const [userInput, setUserInput] = useState(initUserInput);

  const titleChangeHandler = ({ target: { value } }) => {
    // setTitle(value);
    // setUserInput({
    //   ...userInput,
    //   title: value
    // });
    setUserInput((prev) => ({ ...prev, title: value }));
  };
  const amountChangeHandler = ({ target: { value } }) => {
    setUserInput((prev) => ({ ...prev, amount: value }));
  };
  const dateChangeHandler = ({ target: { value } }) => {
    setUserInput((prev) => ({ ...prev, date: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    if (userInput.title == "" || userInput.amount == "" || userInput.date == "")
      return console.log("입력 필요");

    onSaveExpenseData({
      ...userInput,
      value: Number(userInput.value),
      date: new Date(userInput.date)
    });
    setUserInput(initUserInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-1"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
