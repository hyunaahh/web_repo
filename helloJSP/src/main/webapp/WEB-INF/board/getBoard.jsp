<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
			<td colspan="3"><%=vo.getBoardNo()%></td>
		</tr>
		<tr>
			<th>작성일시</th>
			<td><%=vo.getWriteDate()%></td>
			<th>글제목</th>
			<td><%=vo.getTitle()%></td>

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
	<p><a href="boardList.do">목록으로</a></p>
	
	<script>
	//삭제버튼 클릭하면 실행할 함수.
	document.querySelector('input[type=button]').addEventListener('click', function(e){
		document.forms.myForm.action = 'removeForm.do'; //폼의 이름이 마이폼인 애의 액션을 바꾼거임. -> removecontrol 만들러가야지..
		document.forms.myForm.submit(); //myform의 submit 이벤트를 removeform.do로 바꿔주는 거.
		
	});
	</script>
</body>
</html>