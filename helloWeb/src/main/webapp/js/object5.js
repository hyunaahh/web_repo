//object5.js - 객체복사(p.131)

const obj1 = {
	name: "Hong",
	age: 20,
	weight : 66.8,
	//bloodtype
}

const obj3 = obj1; // obj3고치면 1도 바뀜.
console.log(obj1); // prototype 추가하고 다시 콘솔 찍어보기. 삼각형 열어보삼.. 


//assign: 새로운 객체 할당,
const obj2 = Object.assign({name:"Hwang", age:22, height: 123}, obj1); //{신규오브젝트}에 obj1 담김 => obj2는 새로운 객체를 만듦. 참조x obj1이랑 2는 다른값.
//있는건 obj1값으로 담기고 없는건 새로운 값으로 담김.
console.log(obj2); 

//create:상속!  새로운 객체 만들어줌.- 상속을 통해서 자식객체를 생성하면 부모객체를 참조함. but 자식 속성의 값이 변경되면 부모가 가진 값과 다른 값을 유지.
const obj4 = Object.create(obj1); //obj1 부모값으로 그대로 참조.
console.log(obj4); //{} 참조하는 값만.. 
obj4.name - "Kim"; //자기자신의 값을 바꾸는 시점에는 상속에서 벗어났음. => 부모와는 별개의 값.
obj4.age - "23"; //상속에서 벗어났음.
obj1.name = "Hwang"; 
console.log(obj4); //{}
console.log(obj4.name); 
console.log(obj4.age); 

//객체의 속성을 정의하는 방법.- 객체의 속성기술자 (p.136)
obj1.bloodtype = 'O'
//defineProperty : obj1이라는 객체 안에 bloodType을 추가하겠음! => set, get 필요
Object.defineProperty(obj1, 'bloodType', {
	set:function (bt){
		if(bt == "A" || bt == "B" || bt == "AB" || bt == "O"){
			this._bloodType = bt;
		}else{
			console.log("잘못된 유형입니다.");
			this._bloodType = "A"; //초기값. 
		}
	},
	get: function (){
		return this._bloodType;
	}
})

//obj1.bloodType = "C"; 
obj1.bloodType = "AB"; // set통해서 값 지정
console.log(obj1.bloodType); // get 통해서 값 가져온거.


