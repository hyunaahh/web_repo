<%@page import="co.yedam.board.service.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<%@include file="../layout/menu.jsp"%>
<%@include file="../layout/header.jsp"%>

<%@ taglib uri = "http://java.sun.com/jsp/jstl/core" prefix="c" %>

<h3>회원목록</h3>

<%-- <c:forEach var="i" begin="1" end="10" step="2"> --%>
<%-- 	<p>${i }</p> --%>
<%-- </c:forEach> --%>

<table class="table">
	<thead>
		<tr>
			<th>아이디</th>
			<th>비밀번호</th>
			<th>이름</th>
			<th>전화번호</th>
			<th>권한</th>
		</tr>
	</thead>
	<tbody>


		<c:forEach items="${list }" var="member">
			<tr>
				<td>${member.mid }</td>
				<td>${member.pass }</td>
				<td>${member.name }</td>
				<td>${member.phone }</td>
				<td>${member.responsibility }</td>
			</tr>
		</c:forEach>

		<!--  	
<%-- 			<% --%>
// 		List<MemberVO> list = (List<MemberVO>) request.getAttribute("list"); // list<BoardVO> list; 전체조회. object타입에 반환.
<%-- 	%> --%>
<%-- 			<%  --%>
// 			for(MemberVO vo : list){ 
<%-- 			%> --%>
<!-- 			<tr> -->
		<%-- 				<td><%=vo.getMid()%></td> --%>
		<%-- 				<td><%=vo.getPass()%></td> --%>
		<%-- 				<td><%=vo.getName()%></td> --%>
		<%-- 				<td><%=vo.getPhone()%></td> --%>
		<%-- 				<td><%=vo.getResponsibility()%></td> --%>
		<!-- 			</tr> -->
		<%-- 			<%  --%>
<!-- 		 } -->
		<%-- 			%> --%>
		
		
	</tbody>
</table>
<p>
	<a href="main.do">돌아가기</a>
</p>

<%@include file="../layout/footer.jsp"%>
</html>