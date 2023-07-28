var ent = require('readline-sync');
var media = 0;
var valores = [];
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(ent.question('Digite um valor: '));
    valores.push(numero);
    media = media + valores[i];
}
console.log(media / 10);
console.log(Math.max.apply(Math, valores));
console.log(Math.min.apply(Math, valores));
