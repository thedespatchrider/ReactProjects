import react, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
  const [Item, SetItem] = useState("Enter Item");
  const [IDate, SetDate] = useState('2021-06-29');
  const [Price, SetPrice] = useState('0');
  const OnChangeItemHandler = (event) => {
    SetItem(event.target.value);
    console.log(event.target.value);
  };

  const OnChangeDateHandler = (event) => {
    SetDate(event.target.value);
    console.log(event.target.value);
  };

  const OnChangePriceHandler = (event) => {
    SetPrice(event.target.value);
    console.log(event.target.value);
  };

  const expenseSubmitHandler = (event) => {
      event.preventDefault();

      const ExpenseData = {
          itemTitle : Item,
          itemPrice : Price,
          itemDate : new Date(IDate)
      };
      props.onExpenseEntry(ExpenseData);
      SetItem('Enter Item');
      SetDate('');
      SetPrice('0');
  };

  return (
    <form onSubmit={expenseSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Item Name</label>
          <input type="text" value={Item} onChange={OnChangeItemHandler} />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2024-12-31"
            onChange={OnChangeDateHandler}
            value={IDate}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={OnChangePriceHandler}
            value={Price}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Create Expense</button>
      </div>
    </form>
  );
};

export default InputForm;
