//webapp > js > student.js

import svc from "./service.js";

//_목록가져오기
/*시작주석
	async function studentList() {
		let req = await fetch('../studentList.do'); //promise로 감싸서 결과 반환하는 fetch > fetch 처리가다 끝나길 기다렸다가(await)
		let json = await req.json(); // 결국 다 처리될때까지 기다리란 뜻..  // json함수 : json문자열{"retCode" : "OK"} -> js 객체 형태{retCode:"OK"}
		let tbody = document.querySelector('#list');
		try {
			result.forEach(student => {
				tbody.append(makeTr(student));
			})
		} catch (err) {
			console.log('error =>', err)
		}
	}//studentList
	
	//페이지 로딩되면서 바로 실행
	fetch('../studentList.do') //호출
		.then(resolve => resolve.json()) //studentlist json포맷으로
		.then(result => {
			//console.log(result); //result 배열임.
			let tbody = document.querySelector('#list');
	
			result.forEach(student => {
				tbody.append(makeTr(student));
			})
		})
		.catch(err => console.log('error =>', err))
끝주석*/


//++ 비동기방식코드 -> 동기 방 식: 순차적 가독성 높이기: async(await처리 끝나야함.), await(async안에서 처리.) (+11.03)
// async 함수(
//  await처리 : "promise 객체"" 타입을 반환함.	
//  await처리. => promise 객체	반환
//  await처리. = >promise 객체	반환
//)
svc.studentList(result => { //*service.js에서 successCallback(json)의 결과값을 매개값result로 받아서 처리한거임.
	let tbody = document.querySelector('#list');
	result.forEach(student => {
		tbody.append(makeTr(student));
	})
}, err => console.log('error =>', err)); //성공하면 실행할 함수 result, 실패하면 실행할 함수 err

//등록버튼 만들기
document.querySelector('#addBtn').addEventListener('click', addCallback);


//수정버튼이벤트. 서블릿(db변경) -> 화면변경
document.querySelector('#modBtn').addEventListener('click', modifyCallback);


//callback함수
function addCallback(e) {
	//학생아이디 입력값
	let sid = document.querySelector('input[name=sid]').value;
	let sname = document.getElementById('sname').value;
	//or document.querySelector('#sname').value
	let spwd = document.querySelector('#spwd').value;
	let sdept = document.querySelector('#sdept').value;
	let sbirth = document.querySelector('#sbirth').value;

	//`파라메터이름 = ${변수명}`
	let param = `id=${sid}&name=${sname}&password=${spwd}&dept=${sdept}&btd=${sbirth}`
	console.log(param);

	//(1번) fetch('../addStudent.do?' + param) => 
	// get방식 : url패턴. 담을 수 있는 값에 제한있음.
	// post방식 : 파라미터 표현x, 값의 제한x
	//▶(2번) fetch(url, 요청)
	svc.addStudent(
		//optObj
		{
			method: 'post', //요청방식 - 등록이나 수정은...
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		},
		//successCallback
		result => {
			console.log(result);
			if (result.retCode == "OK") {
				alert("추가 성공");
				let tr = makeTr({ studentId: sid, studentName: sname, studentDept: sdept, studentBirth: sbirth });
				document.querySelector('#list').append(tr);
			} else {
				alert("추가 실패");
			}
		}
		,
		//실패하면 실행
		err => console.log('error =>', err)
	); //svc.addStudent

/*
	fetch('../addStudent.do', {
		method: 'post', //요청방식 - 등록이나 수정은...
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: param
	})
		.then(resolve => resolve.json())
		.then(result => {
			console.log(result);
			if (result.retCode == "OK") {
				alert("추가 성공");
				let tr = makeTr({ studentId: sid, studentName: sname, studentDept: sdept, studentBirthday: sbirth });
				document.querySelector('#list').append(tr);
			} else {
				alert("추가 실패");
			}
		})
		.catch(err => console.log('error =>', err));
*/
} //addCallback

function modifyCallback(e) {
	//여기를 모듈창에서 바꿨던 data로 가져와야함..! 
	//let id = document.querySelector('input[name=sid]').value;
	let sid = document.querySelector('.modal-body input[name=sid]').value;
	let sname = document.querySelector('.modal-body input[name=name]').value;
	//or document.querySelector('#sname').value
	let spwd = document.querySelector('.modal-body input[name=pass]').value;
	let sbirth = document.querySelector('.modal-body input[name=birth]').value;

	let param = `id=${sid}&password=${spwd}&name=${sname}&birthday=${sbirth}}`


	//수정은 post방식으로 하기.

	svc.editStudent(
		//첫번째 파라미터
		{
			method: 'post',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: param
		},
		//successCallback
		result => {
			if (result.retCode == "OK") {
				alert("수정 성공")
				console.log(result.vo.studentId); //콘솔로 찍어봐바..
				let targetTr = document.querySelector('tr[data-sid=' + result.vo.studentId + ']') //tr의 속성 중에 data-sid의 값
				let newTr = makeTr(result.vo); //옛날 tr을 새로운 tr로 바꿔주겠음 => replaceChild
				// replaceChild : 부모요소에서 자식요소를 바꿀때. targetTr 부모 : tbody
				let parentElem = document.querySelector('#list');
				parentElem.replaceChild(newTr, targetTr);
				document.getElementById("myModal").style.display = 'none';
			} else {
				alert("수정 실패")
			}
		},
		//errCallback
	)
	err => console.log('error :', err);

	/*	
 	변수에 담은 값들 servlet으로 보내는 거임! 
	fetch('../editStudent.do?id=', {
		method: 'post',
		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
		body : param
	}
	.then(resolve => resolve.json())
	.then(result => {
		if(result.retCode == "OK"){
			alert("수정 성공")
			console.log(result.vo.studentId); //콘솔로 찍어봐바..
			let targetTr = document.querySelector('tr[data-sid='+result.vo.studentId+']') //tr의 속성 중에 data-sid의 값
			let newTr = makeTr(result.vo); //옛날 tr을 새로운 tr로 바꿔주겠음 => replaceChild
			 // replaceChild : 부모요소에서 자식요소를 바꿀때. targetTr 부모 : tbody
			let parentElem = document.querySelector('#list');
			parentElem.replaceChild(newTr, targetTr);
			document.getElementById("myModal").style.display = 'none';
		}else{
			alert("수정 실패")
				}
			})
			.catch(err => console.log('error :', err)));
	*/

} //modifycallback

//makeTr함수
function makeTr(obj) {
	let showFields = ['studentId', 'studentName', 'studentBirthday']
	let tr = document.createElement('tr');
	tr.setAttribute('data-sid', obj.studentId); //tr을 생성하면서 sid라는 값을 담아놓음.
	//tr.setAttribute('data-pwd', obj.studentPassword)
	//tr.setAttribute('data-btd', obj.studentBirthday)
	tr.addEventListener('dblclick', showModal);

	for (let prop of showFields) {
		let td = document.createElement('td');
		td.innerHTML = obj[prop];
		tr.append(td);
	}

	//삭제버튼 만들기
	let td = document.createElement('td');
	let btn = document.createElement('button');
	btn.setAttribute('data-sid', obj.studentId);
	btn.innerHTML = '삭제'; // *버튼은 라벨 필요함! 
	btn.addEventListener('click', function(e) {
		//ajax호출(버튼 클릭해야지) : 서버에 정보넘겨주고 처리한다는 의미 => servlet 실행! 

		svc.removeStudent(obj.studentId,
			result => {
				console.log(result)
				if (result.retCode == "OK") {
					alert("삭제성공");
					tr.remove();
				} else {
					alert("삭제실패");
				}
			},
			err => console.log('error :', err)
		);

		/*
			fetch('../delStudent.do?sid=' + obj.studentId)
				.then(resolve => resolve.json())
				.then(result => {
					console.log(result)
					if (result.retCode == "OK") {
						alert("삭제성공");
						tr.remove();
					} else {
						alert("삭제실패");
					}
				})
				.catch(err => console.log('error :', err));
			*/
	})
	td.append(btn);
	tr.append(td);

	return tr;



}//maketr

function showModal(e) {

	console.log(e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	id = this.dataset.sid; // tr의 "data-sid:sid"임.

	console.log(id); //id 기준으로 데이터조회 가능함! 


	//한건조회하기
	svc.getStudent(id,
		result => {
			console.log(result);
			//var modal = document.getElementById("myModal");
			//modal.style.display = "block"; // 창 뜨도록! 
			
			
			if (result.retCode == "OK") {
				modal.querySelector("input[name=sid]").value = result.vo.studentId;
				modal.querySelector("input[name=pass]").value = result.vo.studentPassword;
				modal.querySelector("input[name=name]").value = result.vo.studentName;
				modal.querySelector("input[name=birth]").value = result.vo.studentBirthday;
			} else {
				alert("실패")
			}
		},
		err => console.log('error :', err)
	);


	/*
		//	   	fetch('../studentGet.do?', {
		//        method: 'post',
		//        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
		//        body: 'id=' + id
		//    	})
		fetch('../getStudent.do?id=' + id)
			.then(resolve => resolve.json())
			.then(result => {
				if (result.retCode == "OK") {
					modal.querySelector("input[name=sid]").value = result.vo.studentId;
					modal.querySelector("input[name=pass]").value = result.vo.studentPassword;
					modal.querySelector("input[name=name]").value = result.vo.studentName;
					modal.querySelector("input[name=birth]").value = result.vo.studentBirthday;
	
<<<<<<< HEAD
				} else {
					alert("실패")
				}
			})
			.catch(err => console.log('error :', err));
	*/


	// Get the modal
	var modal = document.getElementById("myModal");
	modal.style.display = "block"
//	let data = { id: id, name: "홍길동", pass: "1234", birth: "1999-09-09" }
//	modal.querySelector('h2').innerHTML = data.name;
//	modal.querySelector('input[name=pass]').value = data.pass;
//	modal.querySelector('input[name=name]').value = data.name;
//	modal.querySelector('input[name=birth]').value = data.birth;
//	//modal.querySelector('input[name=sid]').value = data.id; //화면에서 숨김! 



	modal.querySelector('h2').innerHTML = "여기에...";
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];





	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none"; //숨김
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}

}