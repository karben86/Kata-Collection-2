// Please do not change the name of these functions

const every = (list, predicate) => {
  if (list.length === 0) return false;
  for (let item of list) {
    if (!predicate(item)) return false;
  }
  return true;
};

const contains = (list, value) => {
  if (list.length === 0) return false;
  for (let item of list) {
    if (item === value) return true;
  }
  return false;
};

const some = (list, predicate) => {
  if (list.length === 0) return false;
  for (let item of list) {
    if (predicate(item)) return true;
  }
  return false;
};

module.exports = {
  every,
  contains,
  some
};
