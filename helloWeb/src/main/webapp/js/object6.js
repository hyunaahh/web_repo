//map, set(p.140)

const map = new Map();
map.set("홍길동", 90);
map.set("김길동", 95);
map.set("김길동", 85); //요걸로 나옴.

//잘 안씀... 
const refval = [12];
map.set(refval, 88);
map.get(refval);

console.log(map.get("홍길동"));

//map.delete("김길동");

//entries : key와 value를 배열 값으로 반환해줌
for(let ent of map.entries()){
	console.log(ent);
	console.log('이름 : ', ent[0], ', 점수 : ', ent[1])
}

map.forEach(function(val, key, map){ // (value, key, map그자체)

	//출력1번
	//if(val > 90){
	//console.log(val, key, map);
	//}
	
	//출력2번
	if(key == "홍길동"){
	console.log(val, key, map);
	}
	
})

// 맵<->배열
const ary = [['프로도', 3], ['라이언', 5], ['어피치', 4]] //배열안의 키와 밸류가 배열로 선언된거임.
const fmap = new Map(ary); //Map(생성자에 배열을 넣어주면 Map타입으로 선언됨.)

for(let ent of fmap.entries()){
	console.log('키 : ', ent[0], ', 값 : ', ent[1]);
}

const entries = fmap.entries();
console.log(entries); //entries : MapIterator 타입

console.log(Array.from(fmap)); // 맵 -> 배열로 변환.


console.clear(); // 위에서 했던거 지워줌.

//Set - 중복된 값 허용 x (p.144)
const set1 = new Set();
set1.add("라이언");
set1.add("프로도");
set1.add("어피치");
set1.add("어피치"); // 문자는 같은 값.
//set1.add({name: "어피치", pont:4});
set1.add(["어피치", 4]);
set1.add(["어피치", 4]); //요거 두개는 다른값임. 배열은 각각 다른 참조값을 가지니까! 

console.log('set사이즈 : ', set1.size); //크기


set1.forEach(function(value, item , set){
	console.log(value , item , set);
})

//Set <-> 배열
const setAry = ["라이언", "프로도","무지", "무지"];
const set2 = new Set(setAry);
console.log('set2사이즈 : ', set2.size); // 중복된 무지 하나는 제거되서 크기 3 나옴.
console.log(Array.from(set2)); //set -> 배열 로! 
