const calculator = require('./calculator')

test('add', () => {
  expect(calculator.addition(1, 2)).toBe(3)
});

test('subtract', () => {
  expect(calculator.subtraction(1, 2)).toBe(-1)
});

test('multiply', () => {
  expect(calculator.multiplication(1, 2)).toBe(2)
});

test('divide', () => {
  expect(calculator.division(1, 2)).toBe(0.5)
});

//failed test cases

test('add', () => {
    expect(calculator.addition(1, 2)).toBe(9)
  });
  
  test('subtract', () => {
    expect(calculator.subtraction(1, 2)).toBe(16)
  });
  
  test('multiply', () => {
    expect(calculator.multiplication(1, 2)).toBe(20)
  });
  
  test('divide', () => {
    expect(calculator.division(1, 2)).toBe(65)
  });


