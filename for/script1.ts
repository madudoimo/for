const entrada = require('readline-sync');

let p:number = parseInt(entrada.question("Digite um numero inteiro postivo: "));

if(p < 0){
    console.log('Digite um numero POSITIVO.');
}
else{
    for(let i = 0; i <= p; i = i+2){
        console.log(i);
}
}