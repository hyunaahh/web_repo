//webapp > js > student.js

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
				let tr = makeTr({ studentId: sid, studentName: sname, studentDept: sdept, studentBirth: sbirth });
				document.querySelector('#list').append(tr);
			} else {
				alert("추가 실패");
			}
		})
		.catch(err => console.log('error =>', err))

} //addCallback

function modifyCallback(e){
	//여기를 모듈창에서 바꿨던 data로 가져와야함..! 
	//let id = document.querySelector('input[name=sid]').value;
	let sid = document.querySelector('.modal-body input[name=sid]').value;
	let sname = document.querySelector('.modal-body input[name=name]').value;
	//or document.querySelector('#sname').value
	let spwd = document.querySelector('.modal-body input[name=pass]').value;
	let sbirth = document.querySelector('.modal-body input[name=birth]').value;
	
	let param = `id=${id}&password=${spwd}&name=${sname}&birthday=${sbirth}}`


	//수정은 post방식으로 하기.
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
	})
	td.append(btn);
	tr.append(td);

	return tr;



}//maketr

function showModal(e) {
	
	console.log(e.target.parentElement, this);
	let id = this.children[0].innerHTML;
	id = this.dataset.sid; //"data-sid:sid"임.
	
	console.log(id); //id 기준으로 데이터조회 가능함! 
	
	
//	   	fetch('../studentGet.do?', {
//        method: 'post',
//        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
//        body: 'id=' + id
//    	})
	fetch('../getStudent.do?id='+ id)
	.then(resolve => resolve.json())
	.then(result => {
		if(result.retCode == "OK"){
			modal.querySelector("input[name=sid]").value = result.vo.studentId;
			modal.querySelector("input[name=pass]").value = result.vo.studentPassword;
			modal.querySelector("input[name=name]").value = result.vo.studentName;
			modal.querySelector("input[name=birth]").value = result.vo.studentBirthday;
			
		}else{
			alert("실패")
		}
	})
	.catch(err => console.log('error :', err));
	
	
	// Get the modal
	var modal = document.getElementById("myModal");
	modal.style.display = "block"
	let data = {id: id, name: "홍길동", pass: "1234", birth: "1999-09-09" }
	modal.querySelector('h2').innerHTML = data.name;
	modal.querySelector('input[name=pass]').value = data.pass;
	modal.querySelector('input[name=name]').value = data.name;
	modal.querySelector('input[name=birth]').value = data.birth;
	
	
	
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
