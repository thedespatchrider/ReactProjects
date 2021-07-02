import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";

function Expenses(props) {
  let expenseData = <p> No expense found </p>;

  if (props.addNewExpense.length > 0) {
    expenseData = props.addNewExpense.map((element) => (
      <ExpenseData
        key={element.Id}
        itemName={element.Item}
        price={element.Price}
        date={element.Date}
      />
    ));
  }

  return <div>{expenseData}</div>;
}

export default Expenses;
