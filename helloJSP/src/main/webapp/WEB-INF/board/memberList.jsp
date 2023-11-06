<%@page import="co.yedam.board.service.MemberVO"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@include file="../layout/menu.jsp"%>
<%@include file = "../layout/header.jsp"%>


	<h3>회원목록</h3>
	<%
		//Object obj를 List<BoardVO> list로 강제 변환한거임.
		List<MemberVO> list = (List<MemberVO>) request.getAttribute("list"); // list<BoardVO> list; 전체조회. object타입에 반환.
	%>

	<table class = "table">
		<thead>
			<tr>
				<th>아이디</th> 
				<th>비밀번호</th> 
				<th>이름</th> 
				<th>전화번호</th>
				<th name = "responsibility">권한</th>
			</tr>
		</thead>
		<tbody>
			<% 
			for(MemberVO vo : list){ 
			%>
			<tr>
				<td><%=vo.getMid() %></td>
				<td><%=vo.getPass() %></td>
				<td><%=vo.getName() %></td>
				<td><%=vo.getPhone() %></td>
				<td><%=vo.getResponsibility() %></td>
			</tr>
			<% 
			} 
			%>
		</tbody>
	</table>
	<p><a href="main.do">돌아가기</a></p>
	
<%@include file="../layout/footer.jsp"%>
</html>