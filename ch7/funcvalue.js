var userName = '이은성';
var userPw = '1111';

function account(userId, userpw = '1111'){
    console.log(userId);
    console.log(userpw);
    var savedName = '이은성';
    var savedPw = '1111';

    if(userName == savedName){
        if(userpw == savedPw){
            console.log('반갑습니다. '+userId+'님');
        }
    }
}
account(userName);

// var userName = '이은성';
// var userPw = '1111';

// function account(userId,userpw){
//     console.log(userId);
//     console.log(userpw);
//     var savedName = '이은성';
//     var savedPw = '1111';
//     // if(userpw == undefined){
//     //     userpw = '1111';
//     // }
//     userpw = userpw || '1111';

//     if(userName == savedName){
//         if(userpw == savedPw){
//             console.log('반갑습니다. '+userId+'님');
//         }
//     }
// }
// account(userName);