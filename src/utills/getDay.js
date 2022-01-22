const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getCurrentDay = (setToday) => {
  const date = new Date();
  const numDay = date.getDay();
  const today = weekdays[numDay];
  setToday(today);
};

export { getCurrentDay, weekdays };
