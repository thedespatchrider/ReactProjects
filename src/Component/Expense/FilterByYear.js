import react, { useState } from "react";
import "./ExpensesFilter.css";

const FilterByYear = (props) => {
  const dropBoxSelectHandler = (event) => {
    // console.log(event.target.value);
    props.onSelectYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Select Year:</label>

        <select
          name="years"
          id="years"
          onChange={dropBoxSelectHandler}
          value={props.defaultSelected}
        >
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default FilterByYear;
