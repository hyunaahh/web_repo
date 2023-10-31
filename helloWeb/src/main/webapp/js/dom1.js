//dom1.js

const fruits = ['수박','사과','복숭아','포도']

//#show>ul>li : li:수박 + li:사과 + ~~ (#아이디값찾을때.)
//createElement, appendChild, innerHTML



//-----● PROF ---
	const ul = document.createElement('ul');
	
	fruits.forEach((fruit)=>{
		const li = document.createElement('li');  //→ <li></li>
		li.innerHTML = fruit;  //→ <li>수박, ~~ </li>
		ul.appendChild(li);  //→ <ul><li>수박, ~~</li></ul>
	})
	
	document.getElementById("show").appendChild(ul); //→ 화면에 나타남!
	
	
/* 내가한거.. ㅠ_ㅠ
let ul = document.createElement('ul');

let li = document.createElement('li');
let li2 = document.createElement('li');
let li3 = document.createElement('li');
let li4 = document.createElement('li');

li.innerHTML = "수박";
li2.innerHTML = "사과";
li3.innerHTML = "복숭아";
li4.innerHTML = "포도";

ul.appendChild(li);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

document.getElementById("show").appendChild(ul);
*/


