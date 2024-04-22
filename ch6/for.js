//1
// for(var i = 0; i<5; i++){
//     console.log('javascript');
// }

//2
// for(var i = 0; i<10; i++){
//     console.log('*');
// }


//3
// for(var i = 2; i<101; i+=2){
//     console.log(i);
// }


//4
// var sum = 0;
// for( var i = 1; i<=10; i++){
//     sum += i;
// }
// console.log(sum);


//5
// for(var i = 1; i<10; i++){
//     console.log('2 * '+i+' = '+2*i);
// }


//6

// const readline = require('readline');
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// rl.question('단수를 입력하세여 : ',function(num){
//     for(var i = 1; i<10; i++){
//         console.log(num + ' * '+i+' = '+num*i);
//     }
//     rl.close();
// });


//7
// var i = 0;
// for(; i<101;)
// {
//     console.log('충전중 : '+i+'%');
//     i++;
// }
// console.log('충전이 완료되었습니다.');

//무한 재생 : for(;;)


//8

// var arr = ['자바스크립트','c언어','파이썬']
// for(var i = 0; i<arr.length; i++){
//     console.log(arr[i]);
// }


//9

console.log('===== 초기 배열 데이터 =====');
var arr = ['자바스크립트','c언어','파이썬']
for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log();
console.log('===== 배열에 데이터 추가 =====');

arr.push('ASP.net');
arr.push('C#.net');

console.log();
console.log('===== 배열의 출력 =====' + '\n');

console.log('배열의 길이 : '+arr.length);
for(var o = 0; o<arr.length; o++){
    console.log(arr[o]);
}