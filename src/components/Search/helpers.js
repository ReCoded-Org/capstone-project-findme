export function getCurrentDate() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getUTCDate();

  return `${currentYear}-${
    currentMonth < 10 ? '0' + currentMonth : currentMonth
  }-${currentDay < 10 ? '0' + currentDay : currentDay}`;
}

export const validateName = (value, condition) => {
  return value.replace(/[\s]+/, '') === condition;
};

export const areObjectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();

  if (keys1.length !== keys2.length) return false;

  let i = 0;
  while (i < keys1.length) {
    if (obj1[keys1[i]] !== obj2[keys2[i]]) return false;
    i++;
  }

  return true;
};
