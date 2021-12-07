const app = require("../../calculator")

describe("Test for Addition", function () {
  let value = app.addNums(5, 6)
  it("accepts two parameters x, y", function () {
    let value = app.addNums(5, 6)
    expect(value).toBe(11)
  })

  it("should fail", function () {
    let value = app.addNums(100, 70)
    expect(value).toBe(170)
  })
})

describe("Test for Multiplication", function () {
  let value = app.multiplyNums(5, 6)
  it("accepts two parameters x, y", function () {
    expect(value).toBe(30)
  })
})
