//object.js
console.log('object start');

let obj1 = {
	name: 'Hong',
	age : 20
}

// 주소 "참조! "
let obj2 = obj1; //obj1의 '주소값'을 2가 가짐.(값이 아니고)
console.log(obj1);
obj2.age = 22;
console.log(obj1); //obj1의 나이가 22로 바뀜.

//새로운 객체를 만든거임 => "복사" - 새로운 값.
let obj3 = {...obj1} //obj1 펼쳐서 넣겠다고한거임. like 하나 복사. 주소값 참조랑 복사는 다름
obj3.age = 24;
console.log(obj1);
console.log(obj3);



//클래스
class Member{
	

	//js는 생성자함수로 만듦 
	constructor(name, age, height){
		this.name = name;
		this.age = age;
		this.height = height;
	}
	
	
	setweight(weight){
		this.weight = weight; // this~~ 이게 필드임.
		}
	
	//메소드
	showInfo(){
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
				}
				
	getweight(){
		return this.weight;
	}
	
	
	
	
//학생의 정보(학생 번호, 이름, 영어점수, 수학점수)넣으면
//tr>td*4
//속성이랑 값이 같으면 그냥 sno, sanme 일케 쓸 수 있음.
	makeTr(student={sno, sname, engScore, mathScore}){ 
		
		let html='';
		html += '<tr>';
		html +='<td>'+ student.sno + '</td>';
		html +='<td>'+ student.sname + '</td>';
		html +='<td>'+ student['engScore'] + '</td>';
		html +='<td>'+ student.mathScore + '</td>';
		html +='</tr>';
		
		return html;
	}
	
	
	makeHtml(studAry=[]){
		//html만들어주는 기능. => this.makeTr(std) 이렇게 호출해줘야 함.
		
				//let obj = this; 의미있는 시점에 obj에 넣고, 
				//console.log('this1:', obj) //찍어보기..
		let table = '<table border="1"><tbody>'
		table += studAry.reduce((acc, student) => acc + this.makeTr(student), ''); //화살표함수에서는 this 사용 가능함.
				// stduAry.reduce(function(acc, stud){
				//	 return acc + obj.makeTr(stud) : function안에서 this는 window객체가 됨.
				//  }, '');
		table += '</table></tbody>';
		this.html = table; // this.html : 새로운 속성 만들어줌.
	}
	
	showPage(dom){
		//innerHTML 속성에 html저장하면 화면에 나타나도록.. 
		 
		dom.innerHTML = this.html;
	}
	
	
	
	
	
} //class Member

const mem1 = new Member('홍길동', 20, 180.7);
console.log(mem1.showInfo());
mem1.setweight(62.5);
console.log('홍길동의 몸무게는', mem1.getweight(),'입니다.');









