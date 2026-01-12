// Gerado com o prompt: 
// "Crie uma função em JavaScript que calcule o valor total de um pedido aplicando desconto"

function calculateTotalWithDiscount(total, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Desconto inválido");
  }
  return total - (total * discountPercent) / 100;
}

module.exports = calculateTotalWithDiscount;
