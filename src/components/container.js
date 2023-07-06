import React, { useState } from "react";
import Input from "./input";
import Button from "./button";
import Result from "./result";
import { getAge } from "../util/util";

const Container = () => {
  const [dob, setDob] = useState({
    day: 0,
    month: 0,
    year: 0,
  });

  const [errMsg, setErrMsg] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [diff, setDiff] = useState({
    days: "",
    months: "",
    years: "",
  });

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    const key = e.target.id;

    if (value === '') {
      setErrMsg({ ...errMsg, [key]: "" });
    }

    switch (key) {
      case "day":
        if (value <= 0 || value > 31) {
          setErrMsg({ ...errMsg, [key]: "Must be a valid day" });
        } else {
          setErrMsg({ ...errMsg, [key]: "" });
        }
        break;

      case "month":
        if (value <= 0 || value > 12) {
          setErrMsg({ ...errMsg, [key]: "Must be a valid Month" });
        } else {
          setErrMsg({ ...errMsg, [key]: "" });
        }
        break;

      case "year":
        if (value < 1900 || value > 2100) {
          setErrMsg({ ...errMsg, [key]: "Must be a valid year [1900 - 2100]" });
        } else {
          setErrMsg({ ...errMsg, [key]: "" });
        }
        break;
    }
    setDob({ ...dob, [key]: value });
  };

  const handleClick = () => {
    const { days, months, years } = getAge(dob.day, dob.month, dob.year);
    setDiff({ days, months, years });
  };

  return (
    <div className="cmp-age-calc__container">
      <div className="cmp-age-calc__form">
        <Input
          label={"Day"}
          placeholder={"DD"}
          handleChange={handleChange}
          errorMsg={errMsg.day}
        ></Input>
        <Input
          label={"Month"}
          placeholder={"MM"}
          handleChange={handleChange}
          errorMsg={errMsg.month}
        ></Input>
        <Input
          label={"Year"}
          placeholder={"YYYY"}
          handleChange={handleChange}
          errorMsg={errMsg.year}
        ></Input>
      </div>
      <div className="cmp-age-calc__Button-wrapper">
        <Button handleClick={handleClick}></Button>
      </div>
      <Result day={diff.days} month={diff.months} year={diff.years}></Result>
    </div>
  );
};

export default Container;
