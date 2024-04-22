function account(userId)
{
    var saveUser = '이은성';
    if(userId == saveUser){
        console.log('반갑습니다.'+saveUser+'님');
    }else{
        console.log('존재하지 않는 회원입니다.');
    }
}
account('이은성');