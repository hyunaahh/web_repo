
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>


<h3>게시판목록</h3>

<table class="table">
	<thead>
		<tr>
			<th>상품코드</th>
			<th>상품명</th>
			<th>설명</th>
			<th>가격</th>
			<th>할인가격</th>
			<th>좋아요</th>
			<th>이미지</th>
		</tr>
	</thead>

	<tbody>

		<c:forEach items="${list }" var="vo">
			<tr>
				<td>${vo.prodNo }</td>
				<td><a href="getBoard.do?bno=${vo.prodNo }"> ${vo.prodName }</a></td>

				<td>${vo.prodDesc }</td>
				<td>${vo.price }</td>
				<td>${vo.offPrice }</td>
				<td>${vo.likeIt }</td>
				<td>${vo.prodImage }</td>
				
			</tr>
		</c:forEach>

	</tbody>
</table>

<p>
	<a href="boardForm.do">등록화면</a>
</p>


</html>