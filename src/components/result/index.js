import React from "react";

const Result = ({ day, month, year }) => {
  return (
    <div className="cmp-age-calc__result">
      <div>
        <span className="cmp-age-calc__result-value">
          {year ? year : "--"}
        </span>{" "}
        years
      </div>
      <div>
        <span className="cmp-age-calc__result-value">
          {month ? month : "--"}
        </span>{" "}
        months
      </div>
      <div>
        <span className="cmp-age-calc__result-value">
          {day ? day : "--"}
        </span>{" "}
        days
      </div>
    </div>
  );
};

export default Result;
