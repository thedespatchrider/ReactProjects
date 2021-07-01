import react from "react";
import InputForm from "./InputForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const ExpenseDataRcvr = (expenseDataFromFrm) => {
    const expenseData = {
      ...expenseDataFromFrm,
      Id: Math.random().toString()
    };
    //console.log(expenseData);
    props.onNewExpenseEntry(expenseData);
  };
  return (
    <div className="new-expense">
      <InputForm onExpenseEntry={ExpenseDataRcvr} />
    </div>
  );
};

export default NewExpense;
