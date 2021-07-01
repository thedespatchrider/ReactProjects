import "./Component/Expense/Expenses.css";

import Card from "./Component/UI/Card";
import Expenses from "./Component/Expense/Expenses";
import NewExpense from "./Component/Expense/NewExpense";
import FilterByYear from "./Component/Expense/FilterByYear";
import react, { useState } from "react";
const DUMMY_EXPENSE = [
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

function App() {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const [newExpense, setNewExpense] = useState(DUMMY_EXPENSE);
  const newExpenseHandler = (newExpenseData) => {
    //console.log(newExpense);
    setNewExpense( prevState => [newExpenseData,...prevState]);
    console.log(newExpense);
    //console.log(newExpense);
  };
  const yearFilterHandler = (yearFromFilter) => {
    setSelectedYear(yearFromFilter);
  };
  return (
    <div>
      <br />
      Let's get started !!
      <br />
      <br />
      <div>
        <NewExpense onNewExpenseEntry={newExpenseHandler} />
      </div>
      <div>
        <Card className="expenses">
          <FilterByYear
            defaultSelected={selectedYear}
            onSelectYear={yearFilterHandler}
          />
          <Expenses year={selectedYear} addNewExpense={newExpense}/>
        </Card>
      </div>
    </div>
    //console.log(element.Item,element.price);
    //})

    /* Expenses.map(element => {
          
      return <div> <ExpenseData itemName={element.Item} price={element.price} /> </div>;
      
      })
      */

    /* <ExpenseData itemName={Expenses[0].Item} price={Expenses[0].price} />
      <ExpenseData itemName={Expenses[1].Item} price={Expenses[1].price} />
      <ExpenseData itemName={Expenses[2].Item} price={Expenses[2].price} />
      <ExpenseData itemName={Expenses[3].Item} price={Expenses[3].price} />
      <ExpenseData itemName={Expenses[4].Item} price={Expenses[4].price} />
 */
    //<ExpenseData itemName="car" price="75" />
  );
}

export default App;
