//ajax2.js

import { table } from './ajaxModule.js';
//onclick 이벤트 등록. <button onclick ="addMember()">
//member = {name:"hong", age:20} member.name
document.getElementById('addBtn').onclick = addMember;
document.getElementById('modBtn').onclick = modMember;

function addMember(e){
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;

	
	const xhtp = new XMLHttpRequest();
	xhtp.open('get', '../AddMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();

	xhtp.onload = function(){
	console.log(xhtp.responseText); //문자열
	//사용자 입력값 : retCode=Ok => {vo:mid, pass, name, phone}
	//tr 생성해서 하위에 td 생성 화면에 입력하기. id="list"의 innerHTML 속성 활용.
	//retCode=NG => alert('처리중 에러')
	
	
		//PROF
			let result = JSON.parse(xhtp.responseText); //js 객체가 됨.
			
			if(result.retCode == "OK"){
				document.getElementById('list').innerHTML += table.makeTr(result.vo); //table.makeTr(result.vo) result.vo 는 xhtp.responseText에서 가져온 값.
			}else{
				alert("처리중 에러(회원아이디 : " + result.vo + ")");
			}
	
	
	//let tr = '<tr><td>' + mid + '</td><td>' + pass + '</td><td>'+ name + '</td><td>' + phone + '</td></tr>'
	//document.getElementById('list').innerHTML += tr;
	
	
	
} //onload 
} //addmember

function modMember(e){
	
	
	let mid = document.getElementById('mid').value;
	let pass = document.getElementById('pass').value;
	let name = document.getElementById('name').value;
	let phone = document.getElementById('phone').value;
	
	const xhtp = new XMLHttpRequest(); //ajax 호출
	xhtp.open('Get', '../ModMemberServ.html?mid=' + mid + '&pass=' + pass + '&name=' + name + '&phone=' + phone);
	xhtp.send();
 	xhtp.onload = function(){
		 let result = JSON.parse(xhtp.responseText);
		 console.log(result);
		 //retcod : ok or ng , vo : mid, pass, name, phone
		 //화면의 데이터 영역에 있는 tr
		 console.log(document.querySelectorAll('#list tr')) //list에 있는 tr을 다 가져오겠습니다.
		 document.querySelectorAll('#list tr').forEach(tr => {
			console.log(tr.children);
			if(tr.children[0].innerHTML == result.vo.mid){
					tr.children[1].innerHTML = result.vo.pass;
					tr.children[2].innerHTML = result.vo.name;
					tr.children[3].innerHTML = result.vo.phone;
			}
		})	
	 }
	
}

/* const xhtp = new XMLHttpRequest(); //비동기방식

xhtp.open('get', '../AddMemberServ.html?mid=M009&pass=9999&name=Kim&phone=010-9977-9999')
xhtp.send();

xhtp.onload = function(){
	console.log(xhtp.responseText);
	
} */
