// var i = 1;
// while(i<13){
//     console.log(i + '월');
//     i++;
// }

// var sum = 0;
// var i = 1;
// while(i<11){
//     sum += i;
//     i++;
// }
// console.log(sum);

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('몇 단 : ',function(num){
    var i = 1;
    while(i<10){
        console.log(num + ' * '+ i + ' = '+num*i);
        i++;
    }
    rl.close();
});