let myFunctions = require('./function')

test('returns 2', () =>{
    expect(myFunctions.returnTwo()).toEqual(2)
  })

test('test greeting', () =>{
expect(myFunctions.greeting('James')).toBe("Hello James.")
expect(myFunctions.greeting('Jill')).toBe("Hello Jill.")
})

test('adds 2 numbers', () =>{
    expect(myFunctions.add(2, 3)).toEqual(5)
  })
// Extra Challenge solution

describe("Math Challenge!", () => {
    test("Add", () => {
        expect(myFunctions.add(10, 5)).toBe(15)
    })
    test("Subtract", () => {
        expect(myFunctions.subtract(11, 3)).toBe(8)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(12, 3)).toBe(36)
    })
    test("Divide", () => {
        expect(myFunctions.divide(15, 5)).toBe(3)
    })
})