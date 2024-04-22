const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('점수를 입력하시오 : ',function(score){
    if(score >=60 && score <= 100){
        if(score>=90){
            console.log('장학대상입니다.')
        }
        else{
            console.log('합격입니다.')
        }
    }
    else{
        if(score<60 && score>=0){
            console.log('불합격입니다.')
        }
        else{
            ('값이 유효하지 않습니다.')
        }
    }
    rl.close();
});