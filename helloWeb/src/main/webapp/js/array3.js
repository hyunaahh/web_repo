//array3.js

let pos = "Hello,world".indexOf(","); // ,가 있는 위치 
let pos2 = "Hello,world".indexOf("b"); //없으면 -1 반환
console.log(pos);
console.log(pos2);

let names = ["콘", "무지", "라이언", "어피치"];
pos = names.indexOf("무"); //배열안에서 위치도 가능함
if (pos == -1) {
	console.log("찾는 값이 없습니다.")
} else {
	console.log("무지는 " + (pos + 1) + "번째 위치에 있습니다.")
};


//{name: "", age:20}
let members = [
	{ name: "김민식", age: 22 },
	{ name: "최민식", age: 27 },
	{ name: "김우현", age: 26 },
]

let search = "민식";
		//	pos = members.findIndex(i=>i.name==search);
		//		console.log(pos);

		// for(let i=0; i<members.length; i++){
		// 	if(pos == -1){
		// 		console.log("민식이 없음");
		// 	}else{
		// 		console.log(pos);
		// 	}
		// }

		// members.forEach(function(item, idx){
		// 	if(item.name == search){
		// 		console.log(item.indexOf(search));
		// 	}else{
		// 		console.log("민식이 없음");
		// 	}
		// })
		
//--------> prof

let cnt = 0;
members.forEach(member => {
	if(member.name.indexOf(search) > -1){
		cnt++;
	}
})
console.log(cnt+"명이 있습니다.");







