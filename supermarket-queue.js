// Please do not change the name of this function
const supermarketQueue = (customers, checkouts) => {
  const tills = Array(checkouts).fill(0);
  for (let i = 0; i < customers.length; i++) {
    tills[tills.indexOf(Math.min(...tills))] += customers[i]
  }
  return Math.max(...tills)
}

module.exports = { supermarketQueue }
