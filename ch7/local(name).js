const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('이름 : ',function(name){
    function account(){
        var saveUser = name;
        console.log('반갑습니다, '+saveUser+'님');
    }
    account();
})

