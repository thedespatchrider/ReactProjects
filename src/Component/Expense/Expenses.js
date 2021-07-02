import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";

function Expenses(props) {
  let filteredExpense;
  filteredExpense = props.addNewExpense.filter((element) => {
    return element.Date.getFullYear() == props.year;
  });

  return (
    <div>
      {filteredExpense.map((element) => (
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
