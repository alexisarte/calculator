import { add, subtract, multiply, divide } from '../js/math.js';

test('add 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract 3 - 2 to equal 1', () => {
  expect(subtract(3, 2)).toBe(1);
});

test('multiply 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divide 6 / 3 to equal 2', () => {
  expect(divide(6, 3)).toBe(2);
});

test('divide 6 / 0 to equal No se puede dividir entre cero', () => {
  expect(divide(6, 0)).toBe('No se puede dividir entre cero');
});
