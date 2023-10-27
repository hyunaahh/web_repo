//array2.js : mocka_data.json 파일의 sample 데이터 활용

const json = `

[{"id":1, "first_name":"Rosmunda", "email":"rheadey0@123-reg.co.uk"},
{"id":2, "first_name":"Berni", "email":"bdemattia1@icq.com"},
{"id":3, "first_name":"Marie-ann", "email":"mlangstrath2@theatlantic.com"},
{"id":4, "first_name":"Jolee", "email":"jlattin3@smugmug.com"},
{"id":5, "first_name":"Camella", "email":"cgeffe4@oaic.gov.au"},
{"id":6, "first_name":"Terrill", "email":"tpethybridge5@wikipedia.org"},
{"id":7, "first_name":"Cristina", "email":"clinkleter6@arizona.edu"},
{"id":8, "first_name":"Lida", "email":"lvigars7@cpanel.net"},
{"id":9, "first_name":"Maisie", "email":"manespie8@who.int"},
{"id":10, "first_name":"Benton", "email":"baleksankin9@google.com.br"}]

`; //json 데이터포맷 => object.JSON.parse()사용 - 문자열을 js객체타입으로 바꾸겠습니다아아아 / `` 앞뒤에 붙여줬음

let members = JSON.parse(json);
console.log(members);

//splice 활용하기.
let delMember = "Camella";

members.forEach((member, idx) => {
	if(member.first_name == delMember){
		members.splice(idx,1)
	}
});

let yourinfo = {name: "Hong", email : "abc@gmail.com"}
members.forEach((member, idx) => {
	if(member.first_name == delMember){
		members.splice(idx, 1, {id: member.id, first_name: yourinfo.name, email : yourinfo.email});
	}
});

let inpVal = window.prompt("이름과 이메일을 입력하세요."); // prompt : 입력한 값을 넣어줌 => ex. 홍길동, abc@gmail.com
console.log(inpVal);
//** */ */
//하나여서 분리해야됨!
// let inpVal2 = inpVal.split(',');
// console.log(inpVal2);
// //members.push(inpVal2);
// members.push()
// members.forEach((member, idx) => members.splice(10, 0, {id: member.id, first_name: inpVal2[0], email: inpVal[1]}));

//prof------
const infoAry = inpVal.split(',');
let nid = members[members.length -1].id +1;
let newMember = {id : nid, first_name: infoAry[0], email:infoAry[1]}
members.push(newMember);
console.log(members);


// 중첩배열
const dupAry = [["라이언", 5], ["어피치",3], ["콘",2], ["무지",4]]; //배열안에 배열 넣음
console.log(dupAry);
console.table(dupAry); //console에 테이블처럼 보여쥼..보기가편하다..




