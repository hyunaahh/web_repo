<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<style>
	#list.span{
		margin: 8px;
	}
</style>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>


	<%
	BoardVO vo = (BoardVO) request.getAttribute("bno");
	%>
	
	<form action = "modifyForm.do" name="myForm">
	<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>">
	<table border="1">
		<tr>
			<th>글번호</th>
			<td class="boardNo" ><%=vo.getBoardNo()%></td>
		</tr>
		<tr>
			<th>작성일시</th>
			<td><%=vo.getWriteDate()%></td>
			<th>글제목</th>
			<td colspan="3"><%=vo.getTitle()%></td>

		</tr>

		<tr>
			<td colspan="4"><textarea rows="5" cols="40"><%=vo.getContent()%></textarea></td>
		</tr>

		<tr>
			<th>이미지</th>
			<td colspan="3"><img style ="align:center" width="150px" src="images/<%=vo.getImage()%>"></td> <!--공백도 다 값으로 포함되니까 주의하기.  -->
		</tr>
		<tr>
			<th>작성자</th>
			<td><%=vo.getAuthor()%></td>
			<th>조회수</th>
			<td><%=vo.getViewCnt()%></td>
		</tr>
		<tr>
			<td colspan="4" align = "center">
			<% if(logId != null && logId.equals(vo.getAuthor())){ %>
				<input type="submit" value="수정"> 
				<input type="button" value="삭제"></td>
			<% } else { %>
			<input disabled type="submit" value="수정"> 
			<input disabled  type="button" value="삭제"></td>
			<% } %>
		</tr>

	</table>
	</form>
	
	<h3>댓글등록</h3>
	<table class = "table">
	<tr>
	<th>댓글내용</th>
	<td><input type="text" id="content"></td>
	<td><button id="addReply">댓글등록</button></td>
	</tr>
	</table>
	
	<h3>댓글목록</h3>
	<ul id="list">
	<li style = "display: none" id="template"><span>0</span><b>첫번째글입니다.</b><span>user01</span><span>2023-10-10</span><button>삭제</button></li>
	</ul>
	<p><a href="boardList.do">목록으로</a></p>
	
	<script>
	//삭제버튼 클릭하면 실행할 함수.
	document.querySelector('input[type=button]').addEventListener('click', function(e){
		document.forms.myForm.action = 'removeForm.do'; //폼의 이름이 마이폼인 애의 액션을 바꾼거임. -> removecontrol 만들러가야지..
		document.forms.myForm.submit(); //myform의 submit 이벤트를 removeform.do로 바꿔주는 거.
	});
	
	//댓글 전체목록
	let bno ="<%=vo.getBoardNo()%>";
	let writer = "<%=logId%>"; 
		//or 요렇게 bno = document.querySelector('.boardNo').innerHTML;
	fetch('replyList.do?bno=' + bno)
	.then(resolve => resolve.json())
	.then(result => {
		console.log(result);
		result.forEach(reply => {
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
	})
	.catch(err=> console.log(err));
	
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
				document.querySelector('#list').append(makeRow(result.vo));
			}else{
				alert('ERROR');
			}
		})
	});
	
	
	
	//댓글 쓰면 한줄 들어가게.
	function makeRow(reply){
		let temp = document.querySelector('#template').cloneNode(true); //디폴트가 false인데 true로! ** cloneNode 
		temp.style.display = "block";
		console.log(temp);
		temp.querySelector('span:nth-of-type(1)').innerHTML = reply.replyNo; //스판태그의 첫번째 애를 가져올거임
		temp.querySelector('b').innerHTML = reply.reply;
		temp.querySelector('span:nth-of-type(2)').innerHTML = reply.replyer;
		temp.querySelector('span:nth-of-type(3)').innerHTML = reply.replyDate;
		return temp;
	}
	
	</script>
</body>
</html>