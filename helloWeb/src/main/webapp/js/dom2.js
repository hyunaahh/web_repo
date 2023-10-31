//dom2.js

//Q.#show> table> tbody> (tr> td:사과 + td:1000) + (tr>td:복숭아+td:1500) 
//+ (tr> td: 포도 + td:1000) + (tr> td:수박 + td:1000)


const fruits = [
	{name: '사과', price: 1000, farmer: '홍길동'},
	{name: '복숭아', price: 1500, farmer: '김민서'},
	{name: '포도', price: 2000, farmer: '최말숙'},
	{name: '수박', price: 3000, farmer: '김선중'}
]

let table = document.createElement('table');
table.setAttribute('border','1');

let tbody = document.createElement('tbody');
table.appendChild(tbody);


	//**check:  .name, price => td1, td2로 나눠서 뽑는거 놓쳤음. > for in 써서 더 간략하게! 
fruits.forEach((fruit) => { // 찍어보기.. console.log(fruit)
	let tr = document.createElement('tr');
	
	for(let prop in fruit){
		let td = document.createElement('td');
		td.innerHTML = fruit[prop]; //fruit[0]
		tr.appendChild(td)
	}	
	tbody.appendChild(tr);
})

document.getElementById("show").appendChild(table);