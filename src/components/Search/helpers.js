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