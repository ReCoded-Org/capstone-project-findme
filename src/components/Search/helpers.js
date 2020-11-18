import { findAllByDisplayValue } from '@testing-library/react';
import { getSearchInfo } from './searchInfo';

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
<<<<<<< HEAD

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
||||||| 9863eaf
=======

export const areObjectsEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1).sort();
  const keys2 = Object.keys(obj2).sort();
  // console.log(keys1);
  // console.log(keys2);
  if (keys1.length !== keys2.length) return false;

  let i = 0;
  while (i < keys1.length) {
    if (obj1[keys1[i]] !== obj2[keys2[i]]) return false;
    i++;
  }

  return true;
};

const searchObj = {
  id: '',
  missingName: '',
  goneMissingOn: getCurrentDate(),
  lastSeenAt: '',
  gender: 'm',
  age: '',
  isMissingPerson: true,
  isLookingForFamily: true,
  isDataEntered: false,
};
const searchInfo = {
  id: '',
  missingName: '',
  goneMissingOn: getCurrentDate(),
  lastSeenAt: '',
  gender: 'm',
  age: '',
  isMissingPerson: true,
  isLookingForFamily: true,
  isDataEntered: false,
};

console.log(areObjectsEqual(searchObj, searchInfo));
>>>>>>> 67d0427c04ae13988617efe6767935d443c059ef
