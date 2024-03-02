const Utils = require('./utils.js');

sendPaymentRequestToApi (totalAmount, totalShipping) {
   const result = Utils.calculateNumber("SUM", totalAmount, totalShipping);

   cosole.log(`The total is: ${result}`);
}
