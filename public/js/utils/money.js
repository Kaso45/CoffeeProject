const numeral = require(`numeral`);

function formatCurrency(price) {
  let amount = numeral(price).format("$0,0.00");
  return amount;
}

module.exports = { formatCurrency };
