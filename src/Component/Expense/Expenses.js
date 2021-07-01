import ExpenseData from "./ExpenseData";
import FilterByYear from "./FilterByYear";

function Expenses(props) {
  const Expenses = [
    //{ Id: props.newExpense.id, Item: props.newExpense.itemTitle, price: props.newExpense.itemPrice, Date: props.newExpense.itemDate },
    { Id: "e0", Item: "Hero", price: "30", Date: new Date(2021, 4, 6) },
    { Id: "e1", Item: "Car", price: "75", Date: new Date(2021, 4, 7) },
    { Id: "e2", Item: "Laptop", price: "40", Date: new Date(2021, 4, 8) },
    { Id: "e3", Item: "Mobile", price: "35", Date: new Date(2021, 4, 9) },
    { Id: "e4", Item: "Table", price: "05", Date: new Date(2021, 4, 12) },
    { Id: "e5", Item: "Teapo", price: "03", Date: new Date(2021, 10, 9) },
    { Id: "e6", Item: "Television", price: "45", Date: new Date(2021, 18, 9) },
    { Id: "e7", Item: "Fan", price: "10", Date: new Date(2021, 4, 10) },
  ];
 
  return Expenses.map((element) => {
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
