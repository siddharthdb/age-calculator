import { intervalToDuration } from "date-fns";
export const getAge = (day, month, year) => {
  const end = new Date();
  const start = new Date(`${year}-${month}-${day}`);

  const { days, months, years } = intervalToDuration({    
    start,
    end
});

  return {
    days,
    months,
    years,
  };
};
