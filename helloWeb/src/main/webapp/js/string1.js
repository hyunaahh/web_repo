let str1 = "Hello";//기본데이터타입
let str2 = new String("Hello");//객체

console.log(typeof str1, typeof str2); 
console.log(str1==str2); //값만 비교
console.log(str1===str2); //값&타입 비교

console.log(str1.toUpperCase());

let result = "   공백 제거 합니다.   ".trim();
console.log(result, '문자개수:'+result.length);

// trim(), trimStart(), trimEnd() : 앞 뒤 공백 제거
// replace(), *split(), *slice(), *subString()
//toString(), *indexOf(), lastIndexOf(), charAt(), includes()
//concat()

result = "Hello, World, Nice, world".replace(',','!') //replace: , -> ! 바꿔줌(첫번쨰 콤마만.. 뒤에껀 안바꿔짐.)
console.log(result);

result = "Hello, World, Nice, world".replace(/\s/g,'!') //g=global : 전체구문에서 공백를 찾아서 !바꿔준다.
result = "Hello, World, Nice, world".replace(/\s/g,'!') //g=global : 전체구문에서 공백를 찾아서 제거한다.
result = "Hello, World, Nice, world".replace(/,/g,'!') //g=global : 전체구문에서 ,를 찾아서 제거한다.
//정규표현식 : [배열객체], {object객체}, /정규표현식 객체/
console.log(result);