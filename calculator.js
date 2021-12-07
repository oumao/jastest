const addNums = (x, y) => {
  return x + y
}

const multiplyNums = (x, y) => {
  return x * y
}

const divideNums = (x, y) => {
  if (x === 0 || y == 0) return
  return x / y
}

module.exports = {
  addNums,
  multiplyNums,
  divideNums,
}
