import react, { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseData.css";
//import "./DateDesign.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseData(props) {
  //const d = new Date(2021,6,28);
  // const [item, updateItemName] = useState(props.itemName);

  /*   const updateHandler = (event) => {
    updateItemName("Changed");
  }; */
  //if(props.date.getFullYear()==2021)
  //console.log(props.date.getFullYear());

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__Description">
          <h2> {props.itemName} </h2>
        </div>
        <Card className="expense-item__price">{props.price}</Card>
      </Card>
    </li>
  );
}

export default ExpenseData;
