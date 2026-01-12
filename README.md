// Gerado com o prompt:
// "Crie testes unitários usando Jest para a função calculateTotalWithDiscount"

const calculateTotalWithDiscount = require("../src/discount");

test("Aplica desconto corretamente", () => {
  expect(calculateTotalWithDiscount(100, 10)).toBe(90);
});

test("Não aplica desconto quando percentual é zero", () => {
  expect(calculateTotalWithDiscount(100, 0)).toBe(100);
});

test("Lança erro para desconto inválido", () => {
  expect(() => calculateTotalWithDiscount(100, 150)).toThrow();
});
