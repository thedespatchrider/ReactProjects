import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";


function Expenses(props) {
  
  
  
// console.log(updatedExpense);
  return props.addNewExpense.map((element) => {
    console.log(element.Item);
    if (props.year == element.Date.getFullYear()) {
      return (
        
          <ExpenseData
            key={element.Id}
            itemName={element.Item}
            price={element.price}
            date={element.Date}
          />
        
      );
    } else return null;
  });
}

export default Expenses;
