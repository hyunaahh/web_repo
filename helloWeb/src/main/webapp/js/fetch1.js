//fetch1.js
import { table } from './ajaxModule.js';


fetch('../MemberListServ2') //fetch는 'promise객체'로 데려옴 (MLS2 json이었음) => ☆then
	.then((resolve)=>{
	console.log(resolve);
	return resolve.json(); //.json : json을 js객체타입으로 변환시켜주는 함수. ( 이전에 send, open 이런거랑 다르게. )
	})
	
	.then((result)=>{ //위에 return이 result로 넘어온거임.
		console.log(result);
		
		let titles = ["회원번호", "비번", "이름", "연락처"];
		let dataAry = result;
		
		result = table.makeTable(titles, dataAry);
		document.getElementById("show").innerHTML = result;	
	})
	
	.catch((err)=>{
		console.log('error => ', err);
	})