import "./Component/Expense/Expenses.css";

import Card from "./Component/UI/Card";
import Expenses from "./Component/Expense/Expenses";
import NewExpense from "./Component/Expense/NewExpense";
import FilterByYear from "./Component/Expense/FilterByYear";
import react, { useState } from "react";
const DUMMY_EXPENSE = [
  //{ Id: props.newExpense.id, Item: props.newExpense.itemTitle, price: props.newExpense.itemPrice, Date: props.newExpense.itemDate },
  { Id: "e0", Item: "Hero", Price: "30", Date: new Date(2021, 4, 6) },
  { Id: "e1", Item: "Car", Price: "75", Date: new Date(2021, 4, 7) },
  { Id: "e2", Item: "Laptop", Price: "40", Date: new Date(2021, 4, 8) },
  { Id: "e3", Item: "Mobile", Price: "35", Date: new Date(2021, 4, 9) },
  { Id: "e4", Item: "Table", Price: "05", Date: new Date(2021, 4, 12) },
  { Id: "e5", Item: "Teapo", Price: "03", Date: new Date(2021, 10, 9) },
  { Id: "e6", Item: "Television", Price: "45", Date: new Date(2021, 18, 9) },
  { Id: "e7", Item: "Fan", Price: "10", Date: new Date(2021, 4, 10) },
];

function App() {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );

  const [newExpense, setNewExpense] = useState(DUMMY_EXPENSE);
  const newExpenseHandler = (newExpenseData) => {
    setNewExpense((prevState) => [newExpenseData, ...prevState]);
    console.log(newExpense);
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
          <Expenses year={selectedYear} addNewExpense={newExpense} />
        </Card>
      </div>
    </div>
  );
}

export default App;
