//ajax.js
//Asynchronous Javascript And XML;
import { table } from './ajaxModule.js';
//비동기 vs 동기

let friends = [];
//비동기 : 함수실행하는데 n초있다가 실행함. 작업끝나는 순서대로 순서가 정해짐. 병렬로 처리함.
	//setTimeout의 매개변수가 function이랑 1000임 => setTimeout(function(), 몇초) *초는 밀리세컨드임. 1초>0.5초>2초
setTimeout(function(){
	friends.push('홍길동');
}, 1000); 

setTimeout(function(){
	friends.push('김길동');
}, 500);

setTimeout(function(){
	friends.push('최길동');
}, 2000);

console.log(friends);

//동기방식 : a->b->c 웹에서는시간많이 걸림.
friends.push('홍길동');
friends.push('김길동');
friends.push('최길동');
console.log(friends);



// 목록 가져오는 애들
//XML .... 
	//Q. 
	//newMember 값을 활용해서 tbody="list"추가하기.
	let newMember = {mid:"M009", pass:"9999", name:"민식이", phone: "010-9999-9999"}
	
	
//AJAX	
let xhtp = new XMLHttpRequest(); // 비동기의 대표적인 방식
xhtp.open('get','../MemberListServ2'); //data 가져옴
xhtp.send(); //실행

xhtp.onload = loadJson;
function loadJson(){
	console.log("rp text : " , xhtp.responseText);
	let jParse = JSON.parse(xhtp.responseText); // json문자열을 js 객체타입으로 ! 얘는 실제 "배열"임.
	console.log("json result: ", jParse);
	//**** xml연결해서 화면에 표 띄워졌던 것처럼 json연결하면 화면에 표 띄울 수 있게 만드는거 숙제.
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
	for(let item of jParse){
		let obj = {
			mid : item.mid,
			pass : item.pass,
			name: item.name,
			phone: item.phone
		}
		dataAry.push(obj);
			} //for 
	let result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById("show").innerHTML = result;
	
			/* ** PROF
				let jParse = JSON.parse(xhtp.responseText);
				let titles = ["회원번호", "비번", "이름", "연락처"];
				let dataAry = [];
				jParse.forEach((member)=>{
					dataAray.push(mid: member.mid, pass: member.pass, name: member.name, phone: member.phone);
				})
				let result = table.makeTable(titles, dataAry);
				console.log(result);
				document.getElementById("show").innerHTML = result;
			*/
			
}//loadJson




function loadXML(){
	
	let doc = xhtp.responseXML;
	let records = doc.getElementsByTagName('record')//레코드라고 하는 결과값을 가져오겠다 // 배열처럼생겼찌만 배열은 아님. forEach 못씀
	console.log(records);
	//console.log(records[0].children[0].innerHTML);// 레코드 0번째안에 있는 children의 0번째 안에 있는 innerHtml을 출력한다.
	let titles = ["회원번호", "비번", "이름", "연락처"];
	let dataAry = [];
		//콘솔창에서 record안에 펼쳡면 children있음. 
	for(let record of records){
		let obj = {
			mid: record.children[0].textContent, // mid
			pass: record.children[1].textContent, // pass
			name: record.children[2].textContent, // name
			phone: record.children[3].textContent //phone
		}; 
	dataAry.push(obj);
	}//for
	
	let result = table.makeTable(titles, dataAry);
	console.log(result);
	document.getElementById('show').innerHTML = result;
	
	//** Q- 비동기! 
	let tr = "<tr><td>" + newMember.mid + "</td><td>" + newMember.pass + "</td><td>" + newMember.name +"</td><td>" + newMember.phone + "</td></tr>";
	document.getElementById('list').innerHTML += tr;
	
} 



 
	
