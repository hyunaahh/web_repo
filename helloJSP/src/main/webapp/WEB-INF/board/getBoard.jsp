<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>


<style>
#list.span {
	margin: 8px;
}

.pagination {
	display: inline-block;
}

.pagination a {
	color: black;
	float: left;
	padding: 8px 16px;
	text-decoration: none;
}

.pagination a.active {
	background-color: #4CAF50;
	color: white;
	border-radius: 5px;
}

.pagination a:hover:not(.active) {
	background-color: #ddd;
	border-radius: 5px;
}
</style>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fm"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>


<!--${bno }  -->

<form action="modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="${bno.boardNo }">
	<table border="1" class="table">
		<tr>
			<th>글번호</th>
			<td class="boardNo">${bno.boardNo }</td>
		</tr>
		<tr>
			<th>작성일시</th>
			<td><fm:formatDate value="${bno.writeDate }" pattern="yyyy-MM-dd HH:mm:ss"></fm:formatDate></td>
			<th>글제목</th>
			<td colspan="3">${bno.title }</td>

		</tr>

		<tr>
			<td colspan="4"><textarea rows="5" cols="40" class="form-control">${bno.content }</textarea></td>
		</tr>

		<tr>
			<th>이미지</th>
			<c:if test="${!empty bno.image }">
				<td><img style="align: center" width="80px" src="images/${bno.image }"></td>
			</c:if>
			<!--공백도 다 값으로 포함되니까 주의하기.  -->
		</tr>
		<tr>
			<th>작성자</th>
			<td>${bno.author }</td>
			<th>조회수</th>
			<td>${bno.viewCnt }</td>
		</tr>
		<tr>
			<td colspan="4" align="center">
			<c:choose>
				<c:when test="${!empty logId && logId == bno.author}">
					<input type="submit" value="수정">
					<input type="button" value="삭제">
				</c:when>
				 <c:otherwise>
					<input disabled type="submit" value="수정">
					<input disabled type="button" value="삭제">
				</c:otherwise>
			</c:choose>
			</td>
		</tr>

	</table>
</form>

<h3>댓글등록</h3>
<table class="table">
	<tr>
		<th>댓글내용</th>
		<td><input type="text" id="content"></td>
		<td><button id="addReply">댓글등록</button></td>
	</tr>
</table>

<h3>댓글목록</h3>
<ul id="list">
	<li style="display: none" id="template"><span>0</span><b>첫번째글입니다.</b>
	<span>user01</span><span>2023-10-10</span><button>삭제</button></li>
</ul>


<div class="pagination"></div>

<p>
	<a href="boardList.do">목록으로</a>
</p>

<script>
	//삭제버튼 클릭하면 실행할 함수.
	document.querySelector('input[type=button]').addEventListener('click', function(e){
		document.forms.myForm.action = 'removeForm.do'; //폼의 이름이 마이폼인 애의 액션을 바꾼거임. -> removecontrol 만들러가야지..
		document.forms.myForm.submit(); //myform의 submit 이벤트를 removeform.do로 바꿔주는 거.
	});
	
	//댓글 전체목록
	let bno ="${bno.boardNo }";
	let writer = "${logId }"; 
		//or 요렇게 bno = document.querySelector('.boardNo').innerHTML;
	let page = 1;	
	
	function showList(pg = 1)	{ //페이지 초기값 넣어준거임.
		//안보이는 li의 첫번째 요소만 제외하고(template용도기 때문에!) 지우겠다 하는거임 for 초기화! 
		document.querySelectorAll('#list li:not(:nth-of-type(1))').forEach(li => li.remove()); //초기화시키려고! 안하면 중복되서 또 밑에 리스트 뜨니까!
		fetch('replyList.do?bno=' + bno + '&page=' + pg) //페이지 안넘겨서 첨에 딱오면 1페이지로 하게끔 한거.
	.then(resolve => resolve.json())
	.then(result => {
		
		if(result.dto.total == 0){
			let noReple = document.createElement('a');
			noReple.innerHTML = "댓글이 없습니다.";
			document.querySelector('.pagination').append(noReple);
		}
		
		if(pg < 0){
			let page = showList(Math.ceil(result.dto.total/5))
			showList(page);
			return;
		}
		//result에 있는 list에 대한 한건 한건해서 목록 그려주는거
		result.list.forEach(reply => {
			let li = makeRow(reply);
// 			let li = document.createElement('li');
// 			let bnoSpan = document.createElemet('span');
// 			bnoSpan.innerHTML=reply.boardNo;
// 			let writerSpan = document.createElement() 
//이런식으로하면 좀 복잡하니 아이디값 주고 아래처럼 해보자.!
			//잘라넣기 해서 makeRow로 보냈음.
// 			let temp = document.querySelector('#template').cloneNode(true); //디폴트가 false인데 true로!
// 			temp.style.display = "block";
// 			console.log(temp);
// 			temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo; //스판태그의 첫번째 애를 가져올거임
// 			temp.querySelector('b').innerHTML = reply.replyNo;
// 			temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
// 			temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
			//ul > li 생성
			document.querySelector('#list').append(li);
			
		})
			//page생성
				console.log("dto는 뭘까요" , result.dto);
			makePaging(result.dto); 
			
	})
	.catch(err => console.log(err));
	
	}//function showList
	
	showList();
	
//page생성 - dto정보가 넘어오니까(startpage, endpage 등드등)
	function makePaging(dto={}){
		document.querySelector('.pagination').innerHTML = '';
		//페이지를 만들고
		if(dto.prev){
			let aTag = document.createElement('a');
			aTag.setAttribute('href', dto.startPage - 1);
			aTag.innerHTML = ">&laquo;";
			document.querySelector('.pagination').append(aTag);
		}
		for(let i=dto.startPage; i<=dto.endPage; i++){
			let aTag = document.createElement('a');
			aTag.setAttribute('href', i);
			aTag.innerHTML = i;
			//active 녹색
			if(i == page){
				aTag.className = 'active'; // 클래스 속성을 지정할 때 className
			}
			document.querySelector('.pagination').append(aTag);
		}
		if(dto.next){
			let aTag = document.createElement('a');
			aTag.setAttribute('href', dto.endPage + 1);
			aTag.innerHTML = "&raquo";
			document.querySelector('.pagination').append(aTag);
		} 
		
		
		
		
	//a태그에 이벤트 입력.  - pagination클래스 a태그 다 가져옴 > 각각에 이벤트 걸겠다.
		document.querySelectorAll('.pagination a').forEach(elem =>{
			elem.addEventListener('click', function(e){
				e.preventDefault(); // form, a => 링크 기능을 차단하고 아랫부분을 계쏙 실행하겠습니다~
				page = elem.getAttribute('href');
				showList(page);
			})
		})
	} //makePaging
	
	
	
//등록버튼에 대한 이벤트! 
	document.querySelector('#addReply').addEventListener('click', function(e){
		let reply = document.querySelector('#content').value ; //input태그니까 value가 있는거
		
		if(!bno || writer == 'null' || !reply){
			alert('값을 확인하세요');
			return; // 함수종료
		}
		//쓰려면 ajax호출해야함. - bno, wirter, reply 값을 servlet쪽으로 전달하도록 하겠음
		fetch('addReply.do', {
			method: 'post',
			headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
			body: 'bno=' +bno + '&reply='+reply +'&replyer='+writer
			
		})
		.then(resolve => resolve.json())
		.then(result => {
			if(result.retCode=="OK"){
				//document.querySelector('#list').append(makeRow(result.vo));
				showList(-1); //약간 세모임.. 
			}else{
				alert('ERROR');
			}
		})
	});
	

	//댓글 쓰면 한줄 들어가게.
	function makeRow(reply){
		
		function deleteCallback(e){
			
			if(writer != reply.replyer){
				alert('권한이 없습니다');
			}
				console.log(e.target.parentElement); //button태그의 상위요소 : li
			//삭제 서블릿 호출하기.
			fetch('removeReply.do?rno='+ reply.replyNo)
			.then(resolve => resolve.json())
			.then(result => {
					console.log("result.retCode", result.retCode )
				if(result.retCode == 'OK'){
					alert('SUCCESS');
					e.target.parentElement.remove();
				}else{
					alert('ERROR');
				}
			})
			.catch(err => console.log(err))
		} //deletecallback
		
		let temp = document.querySelector('#template').cloneNode(true); //디폴트가 false인데 true로! ** cloneNode 
		temp.style.display = "block";
		console.log(temp);
		temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo; //스판태그의 첫번째 애를 가져올거임
		temp.querySelector('b').innerHTML = reply.reply;
		temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
		temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
		temp.querySelector('button').addEventListener('click', deleteCallback);
		return temp;
	} //makeRow
	

	</script>
</body>
</html>