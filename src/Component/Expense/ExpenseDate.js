import Card from "../UI/Card";
import "./DateDesign.css";
function ExpenseDate(props) {
  const expenseDay = props.date.toLocaleString("en-US", { day: "2-digit" });
  const expenseMonth = props.date.toLocaleString("en-US", { month: "long" });
  const expenseYear = props.date.getFullYear();
  return (
    <Card className="expense-date">
      <div className="expense-date__day">{expenseDay} </div>
      <div className="expense-date__month">{expenseMonth}</div>
      <div className="expense-date__year">{expenseYear}</div>
    </Card>
  );
}

export default ExpenseDate;
