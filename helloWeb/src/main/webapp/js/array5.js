//array5.js

//sort - 배열 정렬하기.
	console.log('펭수'> '라이언')
	console.log('펭수'< '라이언')
const arr1 = ['펭수', '라이언', '어피치', '콘', '무지'];
arr1.sort(function(a,b){
		if(a < b){
		return -1; //오름차순
	}else{
		return 1; //내림차순
	}
}); //가나다순으로 정렬됐음.
console.log(arr1);  // 배열 값 자체를 변경시켰음!!! 

const arr2 = [4, 8, 1, 12, 23, 9];
arr2.sort();

arr2.sort();
console.log(arr2); //console:  [1, 12, 23, 4, 8, 9] 이렇게 나옴. 1> 1+2

arr2.sort(function(a,b){
	if(a < b){
		return -1; //오름차순
	}else{
		return 1; //내림차순
	}
});
console.log(arr2); //console: [1, 4, 8, 9, 12, 23]