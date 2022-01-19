const getCurrentDay = (setToday) => {
  const weekdays = [
    null,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const date = new Date();
  const numDay = date.getDay();
  const today = weekdays[numDay];
  setToday(today);
};

export { getCurrentDay };
