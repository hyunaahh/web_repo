//string2.js

const words = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem culpa, adipisci nam, perspiciatis non quaerat eaque laborum asperiores in quasi nesciunt officiis quisquam aliquid totam? Deserunt eius ipsam architecto dolorum!"

//Q1. 공백을 기준으로 가져온 단어의 크기가 5보다 큰 문장을 콘솔에 출력하기. - split : 배열로 뽑아줌.

	let wds = words.split(' ');
	//console.log(wds);
	
	
	for(let i=0; i< wds.length; i++){
		let voca = wds[i].split(' ');
		if(voca.length > 5){
			console.log(wds[i]);
		}
		}
	
	



//Q2. 생년월일을 입력받아서 > 남자/여자 인지 구분하는 함수 만들기.
// function checkGender(ssn주민번호넣기){
// 	//930305-1000000 (1,3/2,4), 9303051000000 930305 1000000노공백 등등 임의의 형태 많음. 
// 	return '남자' || '여자'
// }

function checkGender(ssn){
	if(ssn.lastIndexOf("2") == 7 || ssn.lastIndexOf("4") == 7){
		return '여자'
	}else if(ssn.lastIndexOf("1") == 7 || ssn.lastIndexOf("3") == 7){
		return '남자'
	}
}
let ssn = '930305-2000000';
console.log(checkGender(ssn));

//Q3. 파일명과 파일의 확장자-앞에꺼 임의임. book(파일이름) xls(확장자명) => 가변적임.
 let file = "d:/temp/sample/folder/book.xls"
// let fileName, fileExt




// 아 저거아니고 1번처럼 split을 써보쟈.. 
let dot = file.split('.'); // 
console.log('.기준 : ', dot);
let fileExt = dot[1];
console.log(fileExt); 



// 앞에 짜른거에서 하자..
let slash = dot.split('/');
console.log('/기준 : ', slash);
let fileName = slash[slash.length - 1]
console.log(fileName);

