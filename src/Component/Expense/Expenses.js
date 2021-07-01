import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";


function Expenses(props) {

  return (
    <div>
      {props.addNewExpense.map((element) => (
        //console.log(props.year);
        // if (props.year == element.Date.getFullYear()) {
        //console.log(props.year);
        <ExpenseData
          key={element.Id}
          itemName={element.Item}
          price={element.price}
          date={element.Date}
        />
      ))}
    </div>
  );

  //} else return null;
}

export default Expenses;
