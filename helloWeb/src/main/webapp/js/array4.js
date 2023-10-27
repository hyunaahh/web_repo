//array4.js

const json = `

[{"id":1, "first_name":"Rosmunda", "email":"rheadey0@123-reg.co.uk"},
{"id":2, "first_name":"Berni", "email":"bdemattia1@icq.com"},
{"id":8, "first_name":"Lida", "email":"lvigars7@cpanel.net"},
{"id":9, "first_name":"Maisie", "email":"manespie8@who.int"},
{"id":10, "first_name":"Benton", "email":"baleksankin9@google.com.br"}]

`;

//json 데이터포맷 => object.JSON.parse()사용 - 문자열을 js객체타입으로 바꾸겠습니다 / `` 앞뒤에 붙여줬음

let members = JSON.parse(json);

			//*array5파일 보고 여기 오기! 
				members.sort(function(a,b){
					if(a.first_name < b.first_name) //이름순으로 정렬시키기
						return -1
					else	
						return 1
				});
			//역순 정렬 : .reverse()
					members.sort(function(a,b){
					if(a.first_name < b.first_name) //이름 역순으로 정렬시킴.
						return -1
					else	
						return 1
				}).reverse();



//1. find(함수) - 배열안에 어떤 값 찾아올때: 어떤 값을 받아오려면 'true가 되는 값' 출력하기.
let ary = members.find(function(item,idx,ary){
	console.log(item,idx,ary);
	return false;
})

	//return에 if구문써도 되고, 삼항연산자 써도 되고~~ 
	let result = members.find(function(item,idx,ary){
		if(item.id > 5){
			return true;
		}
		return false;
	})
	
	console.log( result);


//2. filter(): 조건만족하는 모든거(조건에 만족하는 true인 '값'을) 새로운 배열에 반환
result = members.filter(function(item,idx,ary){
	console.log(item,idx,ary);
	return true;
})


		result = members.filter(function(item,idx,ary){
			return item.id > 5;
		})
		console.log(result);
		
		
		result = members.filter(function(item,idx,ary){
			return idx>=1 & idx<3;
		})

		result = members.filter((item, idx) => {
			return idx>=1 & idx<3;
		})
		console.log(result);


//3. []을 초기값으로 받았음. - reduce 사용.
result = members.reduce((acc, item, idx) => {
	if(idx>=1 & idx<3){
		acc.push(item);
	}
	return acc;
},[]) 
console.log(result);


//4. some:배열중에서 만족하는게 하나라도 있으면 true 리턴, every:다 만족해야 true리턴 => true/false 리턴해줌.

result = members.every((member) => {
	console.log(member);
	return member.first_name.length > 5 ;
})

console.log(result);


//5. map : A->B - 새로운 형태의 객체를 넣어주고싶을때 
result = members.map(member => {
	let obj = {id:member.id, name: member.first_name, email: member.email, grade: 'C'}
	return obj; 
})

console.log(result);








