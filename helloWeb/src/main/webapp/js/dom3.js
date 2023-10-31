//dom3.js

//table > (thead > tr > th*n) + (tbody > tr > td*n)

import table from './domTable.js'

let url = "https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=284&serviceKey=RZz%2FWMBXObAktJMhLa93ugUuAxnLotBrIdmCYSRW4dzK7LNwFfmUIeilPz4YbMTTK4kP%2FOSwjhe0VVUavh4s3Q%3D%3D";
let titles = ['센터아이디', '센터명', '의료원', '연락처', '위도', '경도'];


fetch(url)
		// = function(resolve){ return resolve.json() };
	.then(resolve => resolve.json()) 
	.then(fetchCallback) //then메소드에 함수가 매개변수로 들어옴. 
	.catch(err => console.log('error => ', err));


//fetch 호출되는 함수 : callback함수
function fetchCallback(result){

		console.log(result);
		let rawData = result.data; // 콘솔에서 보면 이거 '배열'임
		console.log('raw[0]: ', rawData[0]);
		console.log('raw : ', rawData); // console : 284개 배열 다나옴.

		let sidoAry = []; //optAry에 sido정보 출력하기. 중복된 값은 제거하고 ! 
		//** CHECK!!  
		rawData.forEach(item => {
			if (sidoAry.indexOf(item.sido) == -1) {
				sidoAry.push(item.sido);
			}
		})

		console.log('sidoAr: ', sidoAry);

		let sidoSel = document.querySelector('#sidoList')
		//console.log(sidoSel);
		sidoAry.forEach((sido) => {
			let opt = document.createElement('option');
			opt.innerHTML = sido;
			sidoSel.append(opt);
		})

		//select 태그에 change라는 이벤트가 발생하면! '익명함수; 실행
		sidoSel.addEventListener('change', changeCallback) //changeCallback()하게 되면 체인지하기전에 함수가 실행되어버림. & 정해진 매개값이라서 
		
		function changeCallback(e) {
			console.log(e.target.value); //시도명
			//선택된 시도 값에 맞는 센터명만 출력하기.
			let searchSido = e.target.value;
			let filterAry = rawData.filter(center => {
				return center.sido == searchSido;
			})
			genTable(filterAry);
			console.log(filterAry);

		}//changeCallback
		
		genTable(rawData); //초기데이터로 화면 출력


//		//1번 case
//		let filterAry = rawData.filter(center => {
//			return center.sido == '대전광역시';
//		})
//		genTable(filterAry);
		

		//2번 case
		let filterAry = rawData.filter((center,idx) => {
		return idx < 10})
		genTable(filterAry);


}//fetchCb





function genTable(rawData = []) {
	//초기화! 
	// = document.getElementById('show').innerHTML = '';
	document.querySelector('#show').innerHTML = '';
	let thead = table.makeHead(titles); // header 정보
	//map: 내가 원하는 대로 mapping된 정보만 잘라서 출력할 수 있게 함.s
	let mapData = rawData.map(center => {
		let newCenter = {
			id: center.id,
			centerName: center.centerName.replace('코로나19', ' '), // 코로나19-> 공백으로 대체! 
			org: center.org,
			phoneNumber: center.phoneNumber,
			lat: center.lat,
			lng: center.lng
		}
		return newCenter;
	});
	
		//**reduce 써서 위에 저 let mapData 만들어보기. https://yull-study-code.tistory.com/10
		let rdAry = []
		
		let reduceData = rawData.reduce((acc, center, idx) =>{
		
		acc.push({id:center.id, centerName: center.centerName.replace('코로나19', ' '), org: center.org, phoneNumber: center.phoneNumber, lat: center.lat, 	lng: center.lng})
		return acc;
		}, [])
		
		console.log("reduceData :" , reduceData)
		

	let tbody = table.makeBody(mapData); // [배열{안에 객체}, {},{},...]
	let table1 = document.createElement('table'); //변수명 table1으로.. 
	table1.append(thead, tbody);
	table1.setAttribute('border','1');
	document.querySelector('#show').append(table1); //append에 ,써서 더 쓸수도 있군! 
	
	//tr클릭 이벤트 등록
	let targetTr = document.querySelectorAll('tbody tr'); //위에 제목라인은 안들어가게 tbody에 있는 tr만 가져옴
	//console.log(targetTr);
	targetTr.forEach(tr => {
		//클릭이벤트가 발생하면 함수를 실행시키세요
		tr.addEventListener('click', function(e){
		//console.log(tr);
		console.log(tr.children[4].innerHTML, tr.children[5].innerHTML); //innerHTML : 딱 그 텍스트만 나옴. 모르면 지워보면 됨.
		let lat = tr.children[4].innerHTML;
		let lng = tr.children[5].innerHTML;
		//location.href = 'daumapi.html?x='+lat + '&y=' + lng; //이동할 page
		window.open('daumapi.html?x='+lat + '&y=' + lng);
		
		})
	}) //targetTR.forEach
	
	
}//gen


