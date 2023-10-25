//object3.js


//객체선언
const member ={
	name: '홍길동',
	age: 20,
	height: 123.4,
	showInfo: function(){
		return `이름은 ${this.name}, 나이는 ${this.age}세 입니다.`;
	},
	
	html:'', //밑에 this.html 그떄 쓸려면 위에 선언해줘야함.
	
	makeTr: function(student={sno, sname, engScore, mathScore}){
		let html='';
		html += '<tr>';
		
		for(let prop in student){
				//html +='<td>'+ student.sno + '</td>';
				//html +='<td>'+ student.sname + '</td>';
				//html +='<td>'+ student['engScore'] + '</td>';
				//html +='<td>'+ student.mathScore + '</td>';
			html += '<td>' + student[prop] + '</td>' //값을 가져옴.
		}
		
		html +='</tr>';
		
		return html;
	},
	
	makeHtml(studAry){
	let table = '<table border="1"><tbody>'
		table += studAry.reduce((acc, student) => acc + this.makeTr(student), '');
		table += '</table></tbody>';
		this.html = table; //=> 이 객체안의 html이라는 속성에 table 넣겠다.여기서 this는 Member 의미함.
	},
	
	showPage(dom){
		dom.innerHTML = this.html;
	}
	
	
	
} //const member



//(member객체가 가지고 있는 속성 보고싶을떄.) 객체의 속성을 보고싶을 때 : for ~ in
for(let prop in member){
	// 값 보고 싶으면 : member.name 아니면 member['age']
	console.log(prop); // 객체 속성 
	console.log(member[prop]); // 각각 값을 보고 싶으면 
	console.log(typeof member[prop]);
	if((typeof member[prop]) != 'function'){
		console.log(member[prop]);
	}
}


const students = [
	{sno: "001", sname: "최해주", engScore:80, mathScore:85},
	{sno: "002", sname: "김채민", engScore:82, mathScore:83},
	{sno: "003", sname: "최다예", engScore:84, mathScore:88}
]

member.makeHtml(students);
member.showPage(document.getElementById('show'));
