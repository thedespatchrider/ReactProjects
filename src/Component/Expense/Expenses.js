import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";

function Expenses(props) {
  return (
    <div>
      {props.addNewExpense.length === 0 && <p> No expense found </p>}
      {props.addNewExpense.length > 0 &&
        props.addNewExpense.map((element) => (
          <ExpenseData
            key={element.Id}
            itemName={element.Item}
            price={element.Price}
            date={element.Date}
          />
        ))}
    </div>
  );
}

export default Expenses;
