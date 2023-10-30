//booklist1

import { table } from './booklistmodule.js';

let xhtp = new XMLHttpRequest();
xhtp.open ('get', '../BookListServlet.html'); 
xhtp.send();

xhtp.onload = loadJson;
function loadJson(){
		//console.log(xhtp.responseText);
	let jParse = JSON.parse(xhtp.responseText);
		//console.log(jParse);
		
	let titleArr = ["도서코드", "도서명", "저자", "출판사", "가격"];
	let dataArr =[];
	
	for (let item of jParse){
		let obj = {
			code : item.code,
			title : item.title,
			author : item.author,
			press : item.press,
			price : item.price	
		}
		
		dataArr.push(obj);
	} //for
	
	let result = table.makeTable(titleArr, dataArr);
	document.getElementById("test").innerHTML = result;
	
}//loadJson