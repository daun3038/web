const readline = require('readline');

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

rl.question('점수를 입력하시오 : ',function(score){
    if(score >=91 && score<=100){
        console.log('A학점');
    }
    else if(score <=90 && score>80){
        console.log('B');
    }
    else if(score <=80 && score>70)
    {
        console.log('C');
    }
    else if(score<=70 && score>60){
        console.log('D');
    }
    else if(score <=60 && score>=0){
        console.log('F');
    }
    else{
        console.log('범위를 벗어났습니다.');
    }

})