//object1.js - object랑 이어서 쓸 수 있음.

//추가하고싶으면 : prototype - 단 이 파일안에서만! 
Member.prototype.setbloodType = function(bloodType){
	this.bloodType = bloodType;
}
Member.prototype.getBloodType = function(){
	return this.bloodType;
	}
	
	const mem2 = new Member('홍길동', 22, 123.4);
	mem2.setbloodType('AB');
	console.log(mem2.getBloodType());
	
	
//문자열 갖고와서 다섯글자만 남기고 자르기
//prototype : 문자열 기능ㅇ에서 좀 더 추가하고싶어서 써준거임.
//javascript 클래스 추가 가능.

	String.prototype.truncate = function(){ 
		return this.substring(0,5); //이때 this는 String문자열 값.
	}
	
	let result = "Hello world".truncate();
	console.log(result);