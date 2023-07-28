const entrad = require('readline-sync');

let z:number = 0;

for(let i = 0; i < 5; i++){
    let m:number = parseFloat(entrad.question('Digite a nota: '));
    z = m + z;
}
console.log('Média: ' + z / 5);