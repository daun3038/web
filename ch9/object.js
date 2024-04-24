// let dic = new Object();

// dic.boy = '소년';
// dic.gril = '소녀';
// dic.friend = '친구';

// let dic ={
//     boy : '소년',
//     gril : '소녀',
//     friend : '친구'
// };

// dic.apple = '사과';
// dic.ten = 10;
// delete dic.boy;
// console.log(dic.apple);
// console.log(dic.gril);
// console.log(dic.ten);
// console.log(dic.boy);

// const dic ={
//     present : '현재',
// };

// console.log(dic.present);
// dic.present = '선물';
// console.log(dic.present);

// const unit = {
//     attack : function(weapon){
//         return `${weapon}으로 공격한다.`;
//     }
// }
// const unit={
//     attack(weapon){
//         return `${weapon}으로 공격한다.`;
//     }
// }

// console.log(unit.attack("주먹"));
// console.log(unit.attack("총"));


// let dic = {
//     boy : '소년',
//     gril : '소녀',
//     friend : '친구'
// };

// console.log(dic['boy']);
// console.log(dic['gril']);
// console.log(dic['friend']);

// const readline = require('readline');

// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout,
// });

// let dic ={
//     boy : '소년',
//     gril : '소녀',
//     friend: '친구'
// };

// rl.question('찾을 단어를 입력하시오 :',function(key){
//     let word = key;
//     console.log(dic[word]);

//     rl.close();
// });

// rl.question('다이쓰! 무조건 천원, 상품 입력 : ',function(obj){
//     let basket ={
//         [obj] : '1000원',
//     }
//     console.log(basket[obj]);
//     rl.close();
// });

// let id = 'jamsuham';
// let pw = '1111';

// let user ={
//     id,
//     pw,
// }
// console.log(user.id);
// console.log(user.pw);

let user ={
    id : 'jamsu',
    pw : '1111',
    name : 'lch',
    mobile : '010-8888-1111',
    country : '대한민국'
}

for(let info in user){
    console.log(`${info} : ${user[info]}`);
}