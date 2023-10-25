//function5.js

let sum = 0;
[10,20,30].forEach(function(num){ //배열안의개수만큼 반복하면서 안에 함수 실행foreach
	sum += num; //consumer타입 : 매개값을 받아서 소진하고, 반환값은 없음.
})
console.log(`forEach:`, sum);

let sum1 = 0;
sum1 = [10,20,30].reduce(function(acc, item, idx, ary){ //acc:초기값
	//console.log(acc,item,idx);
	return acc+item; //function :매개값을 소진, 반환값 생성.
}, 0); // reduce() : 배열메소드. /0 : 초기값. / return값이 그다음의 초기값으로 쓰임.
console.log('reduce :', sum1);

//매개변수(=parameters) / ...args : ab뒤에 매가값으로 몇개들어올진모르는데 알아서 처리해.
function sum3(a=0, b=0, ...args){ 
	console.log(args);
	//return a + b + args.reduce(function(acc, item){return acc + item}) 
	let result = 0;
	result = a+b;
	args.forEach(num => result += num);
	return result;
	
		//args.forEach(function(num){result += num});
}
	//위에꺼랑 같음.
	function sum3(a=0, b=0, ...args){ 
		console.log(args);
		return a + b + args.reduce((acc, item) => acc+item)
	}

console.log(sum3(10,20,30,40,50,60)); //값으로 들어오는 애들:매개값(=arguments)

//Q.reduce 연습 - 두개를 비교했을 때 (acc와 item) 두개중에 큰녀석이 ... 계속 큰값 반환하면 최고큰값이 담김.
const numary = [4, 2, 6, 9, 1, 7];
let max = 0;
max = numary.reduce(function(acc, item){
	if(acc > item){
		return acc;
	}else{
		return item;
	}
		})

max = numary.reduce((acc,item) => acc > item ? acc : item);
console.log('최대값 : ', max)
