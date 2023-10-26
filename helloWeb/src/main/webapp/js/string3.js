//string3.js

let today = new Date(); //Date: js내장객체
today.getFullYear(); //2023
today.getMonth(); // 9
today.getDate(); //26


//지정하는 값으로 날짜 변경
today.setFullYear(2022); //날짜지정
today.setMonth(0); //1월
today.setDate(1); //1일
today.setHours(10); //10시



console.log(today.toISOString()); // 17:34 -9Hour하면 08시가 뜬당.. 
console.log(today.toString()); //Sat Jan 01 2022 17:35:54 GMT+0900 (한국 표준시)
console.log(today.toLocaleDateString()); //2022.1.1

//형식 만들 수 있다! 
function dateFormat(today){
	//yyyy-mm-dd hh24:mm:ss
	return today.getFullYear() + "-" + ("0" + (today.getMonth()+1)).slice(-2) + "-" + + ("0" + today.getDate()).slice(-2)
	+ " " + ("0"+ today.getHours()).slice(-2) + ":" 
	+ ("0" + today.getMinutes()).slice(-2) + ":" + ("0"+ today.getSeconds()).slice(-2);
	
} 
console.log(dateFormat(today))