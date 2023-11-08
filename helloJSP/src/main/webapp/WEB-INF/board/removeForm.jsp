<%@page import="co.yedam.board.service.BoardVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<jsp:include page="../layout/menu.jsp"></jsp:include>
<jsp:include page="../layout/header.jsp"></jsp:include>   

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>삭제화면</title>
</head>
<body>


${vo}
	
	
	<h3>게시글 삭제 화면</h3>
	<form action="removeBoard.do" method="post">
		<input type="hidden" name="bno" value="${vo.boardNo}"> <!-- 아이디값 가져와서 수정하니까 value에 보드넘버로 가져옴. -->
		
		
		<!-- 파일첨부 처리하려면 multipart/form-data  -->
		<table border="1">
			<tr>
				<th>제목</th>
				<td><input type="text" name="title" value="${vo.title}"></td>
				<!-- vo 값들을 넣어주는거임. -->
			</tr>
			
			<tr>
				<td colspan="2"><textarea cols="40" rows="5"
						name="content">${vo.content}</textarea></td>
			</tr>
			
			<tr>
				<th>작성자</th>
				<td><input type="text" name="author" value="${vo.author}"></td>
			</tr>
			<tr>
				<th>파일명</th>
				<td><input src="images/${vo.image}" type="file"
					name="img" width="150"></td>
				<!-- 라이브러리하나활용해서 쓰느 방식으로 go : cos 라이브러리 추가.  -->
			</tr>


			<tr>
				<td colspan="2"><input type="submit" value="삭제"> 
				<input type="reset" value="초기화"></td>
			</tr>
		</table>
	</form>
</body>
</html>