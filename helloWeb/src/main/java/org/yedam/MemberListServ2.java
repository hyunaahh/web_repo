package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberServiceImpl;
import org.yedam.service.MemberVO;

/**
 * Servlet implementation class MemberListServ
 */
@WebServlet("/MemberListServ2")
public class MemberListServ2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MemberListServ2() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		MemberService svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();
		System.out.println("json입니다.");
		response.setContentType("text/json;charset=utf-8");
		PrintWriter out = response.getWriter();
		//[{"mid":value,"pass":value,"name":value,"phone":value}] : json포맷 (vo.get뭐시기에 다 숫자아니고 문자라서 여기도 \"해줘야됨. 문자는 필요업스
		String str = "[";
		int cnt = 0;
		for(MemberVO vo : list) {
			str += "{";
			str += "\"mid\":\"" + vo.getMid() + "\",";
			str += "\"pass\":\"" + vo.getPass() + "\",";
			str += "\"name\":\"" + vo.getName() + "\",";
			str += "\"phone\":\"" + vo.getPhone() + "\"";
			str += "}";
			if(++cnt != list.size()) {
				str += ","; //마지막에 ,찍으면 안되서 마지막 아니면 ,찍겠금 만들었음.
			}
		}
		str += "]";
		out.print(str);
	} //doget

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
