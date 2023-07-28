const entr = require('readline-sync');

let y = 1;
let u = 0;

for(let i = 0; i < 10; i++){
    let x = y + u;
    console.log(x);

    u = y;
    y = x;
}