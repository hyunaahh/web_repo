package co.yedam.common;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.MemberService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.MemberServiceImpl;

public class MemberControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		MemberService svc = new MemberServiceImpl();
		List<MemberVO> list = svc.memberList();
		
		String responsibility = 
		req.setAttribute("responsiblility", responsibility);
		System.out.println("list" + list);
	
	
		HttpSession session = req.getSession(); //로그인하면 세션 생김. 세션값은 계속 유지됨.
		session.setAttribute("responsibility", list);  //나중에 session.getAttribute("logId")해서 가져올 수 있음.
		
		RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/memberList.do");
		try {
			rd.forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
				

	} //execute

}
