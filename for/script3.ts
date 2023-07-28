const entra = require('readline-sync');

let k:number = parseFloat(entra.question('Digite um numero: '));

for(let i = 0; i <= k * 10; i = i + k){
    console.log(i);
}