<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>



	<h3>게시글 등록화면</h3>
	<form action="addBoard.do" method="post" enctype="multipart/form-data"> <!-- 파일첨부 처리하려면(파일업로드할때) multipart/form-data  -->
		<table class = "table" border="1">
			<tr>
				<th>제목</th>
				<td><input type="text" class="form-control" name="title"></td>
			</tr>
			<tr>
				<th>작성자</th>
				<td><input type="text"  class="form-control" name="author" value = "<%=logId%>" readonly></td> <!-- 세션에서 값 읽어오도록!   -->
			</tr>
			<tr>
				<th>파일명</th>
				<td><input type="file" class="form-control" name="img"></td> <!-- 라이브러리하나활용해서 쓰느 방식으로 go : cos 라이브러리 추가.  -->
			</tr>
			<tr>
				<td colspan="2"><textarea cols="40" rows="5" name="content" class="form-control"></textarea></td>
			</tr>
		</table>

		<tr>
			<td colspan="2"><input type="submit" value="저장" class="btn btn-primary"> <input
				type="reset" value="초기화" class="btn btn-warning"></td>
		</tr>

	</form>
<%@include file="../layout/footer.jsp"%>
</html>