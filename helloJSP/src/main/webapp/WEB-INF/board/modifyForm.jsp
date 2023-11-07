<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>modifyForm.jsp</title>
</head>
<body>
	<h3>게시글 수정 화면</h3>
	<%
	BoardVO vo = (BoardVO) request.getAttribute("vo"); // vo에 값 담아줬으니까.
	%>
	<form action="modifyBoard.do" method="post" > <!-- enctype="multipart/form-data"이거 파일수정안하니까 얘는 빼야지.. -->
		<input type="hidden" name="bno" value="<%=vo.getBoardNo()%>"> <!-- 아이디값 가져와서 수정하니까 value에 보드넘버로 가져옴. -->
		<!-- 파일첨부 처리하려면 multipart/form-data  -->
		<table border="1">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="<%=vo.getTitle()%>"></td>
				<!-- vo 값들을 넣어주는거임. -->
			</tr>
			
			<tr>
				<td colspan="2"><textarea cols="40" rows="5"
						name="content"><%=vo.getContent()%></textarea></td>
			</tr>
			
			<tr>
				<th>작성자</th>
				<td><input type="text" name="author" value="<%=vo.getAuthor()%>"></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><input src="images/<%=vo.getImage()%>" type="file"
					name="img" width="150"></td>
				<!-- 라이브러리하나활용해서 쓰느 방식으로 go : cos 라이브러리 추가.  -->
			</tr>

			<tr>
				<td colspan="2"><input type="submit" value="수정"> 
				<input type="reset" value="초기화"></td>
			</tr>
		</table>
	</form>


</body>
</html>