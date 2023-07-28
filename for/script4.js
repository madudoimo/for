var entr = require('readline-sync');
var y = 1;
var u = 0;
for (var i = 0; i < 10; i++) {
    var x = y + u;
    console.log(x);
    u = y;
    y = x;
}
