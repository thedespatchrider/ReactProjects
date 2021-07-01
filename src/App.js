import "./Component/Expense/Expenses.css";

import Card from "./Component/UI/Card";
import Expenses from "./Component/Expense/Expenses";
import NewExpense from "./Component/Expense/NewExpense";
import FilterByYear from "./Component/Expense/FilterByYear";
import { useState } from "react";

function App() {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const [newExpense, setNewExpense] = useState('');
  const newExpenseHandler = (newExpenseData) => {
    setNewExpense(newExpenseData);
    console.log(newExpenseData);
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
