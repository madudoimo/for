var entra = require('readline-sync');
var k = parseFloat(entra.question('Digite um numero: '));
for (var i = 0; i <= k * 10; i = i + k) {
    console.log(i);
}
