//array.js

const arr1 = [] 
arr1.push(10); //push : 배열에 담아줌 - "끝"에! 
arr1.push('ten');
arr1.push({name : "Hong", age:20});

arr1.unshift(20); //unshift : 배열 "맨 앞"에 추가.

console.log('크기 : ', arr1.length); //배열의 크기
//arr1.length = 3; // js에선 '배열 크기 지정'할 수 있음 < 줄였... (원래 4개였음! )
//arr1.length = 0; // 배열 초기화해버림. 됴심.. 
arr1.length = 5; // 값 없으면 undefined 나옴

arr1.pop(); // 뒤에서부터 하나씩 제거 pop
//arr1.shift(); //앞에서부터 하나씩 제거 shift

// 추가, 삭제, 수정 다 가능! : "splice"" - 매개값으로 조정=>(idx:위치!, 대체할 개수, 넣을 값)
arr1.splice(1, 0, 30); //추가 : 대체할 값이 업승니까 그냥 30이 들어옴
arr1.splice(1, 1, 30); //수정 : 10의 값이 30이 됨
arr1.splice(1, 1); // 삭제 : 대체할 값이 없으니까~
arr1.splice(1, 0, 50, 60); //두번쨰 위치에 0개 개수만큼 50,60으로 대체하겠음 
arr1.splice(0, 2, 50, 60);

for(let ary of arr1){
	console.log(ary);
}

