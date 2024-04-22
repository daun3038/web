// function plus(a,b){
//     return( a + b );
// }
// var result = plus(10,20);
// console.log('두 수의 합 : '+ result);

const readline = require('readline');
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

function checkAge(age){
    if(age > 19){
        return true;
    }
    else{
        return false;
    }
}

rl.question('나이 : ',function(nai){
    if(checkAge(nai)){
        console.log('입장 가능합니다.');
    }
    else{
        console.log('입장을 불허합니다.');
    }
    rl.close();
});