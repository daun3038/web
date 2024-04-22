console.log(true && true);
console.log(true && false);
console.log(false && false);

//

var id = 'jam';
var pw = '1111';
var result = (id == 'jam' && pw == '1111')
? "로그인되었습니다." : "아이디 또는 비번 틀림~~";
console.log(result);

//

console.log(true || true);
console.log(false || true);
console.log(false || false);

//

var age = 30;
var result = (age > 75 || age < 7) ? "지원대상입니다~" : "지원대상이 아닙니다~ㅠㅠ";
console.log(result);

//

console.log(!false);
console.log(!'jam~');

//

var id = 'jam';
var result = (id !== null && id !== undefined) ? "아이디가 입력되었습니다.":"아이디가 입력되지 않았습니다.";
console.log(result);

var id = 'jam';
var result = (id ?? null) ? "아이디가 입력되었습니다.":"아이디가 입력되지 않았습니다.";
console.log(result);

