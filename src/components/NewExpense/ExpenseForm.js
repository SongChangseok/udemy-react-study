import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  //   const [title, setTitle] = useState();
  //   const [amount, setAmount] = useState();
  //   const [date, setDate] = useState();
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: ""
  });

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
    // console.log(title, amount, date);
    console.log(userInput);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-1"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
