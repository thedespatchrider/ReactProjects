import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";


function Expenses(props) {
  
  
  
// console.log(updatedExpense);
  return props.addNewExpense.map((element) => {
    console.log(element.Item);
    if (props.year == element.Date.getFullYear()) {
      return (
        <div key={element.Id}>
          <ExpenseData
            itemName={element.Item}
            price={element.price}
            date={element.Date}
          />
        </div>
      );
    } else return null;
  });
}

export default Expenses;
