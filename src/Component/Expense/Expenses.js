import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";
import './ExpenseList.css'

function Expenses(props) {
  if (props.addNewExpense.length === 0) {
    return <h2 className="expenses-list__fallback"> Expense not found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.addNewExpense.map((element) => (
        <ExpenseData
          key={element.Id}
          itemName={element.Item}
          price={element.Price}
          date={element.Date}
        />
      ))}
    </ul>
  );
}

export default Expenses;
