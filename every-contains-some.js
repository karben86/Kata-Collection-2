// Please do not change the name of these functions

const every = (list, predicate) => {
  if (list.length === 0) return false;
  let isTrue = true;
  for (let item of list) {
    isTrue = isTrue && predicate(item);
  }
  return isTrue;
};

const contains = (list, value) => {
  if (list.length === 0) return false;
  let isTrue = false;
  for (let item of list) {
    if (item === value) isTrue = true;
  }
  return isTrue;
};

const some = (list, predicate) => {
  if (list.length === 0) return false;
  let isTrue = false;
  for (let item of list) {
    if (predicate(item)) isTrue = true;
  }
  return isTrue;
};

module.exports = {
  every,
  contains,
  some
};
