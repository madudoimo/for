var entrad = require('readline-sync');
var z = 0;
for (var i = 0; i < 5; i++) {
    var m = parseFloat(entrad.question('Digite a nota: '));
    z = m + z;
}
console.log('Média: ' + z / 5);
