package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class LogInControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String id = req.getParameter("id");
		String pw = req.getParameter("pass");
		
	
		BoardService svc = new BoardServiceImpl();
		MemberVO vo = new MemberVO();
		
		if(svc.loginCheck(id, pw)) {
			
			//session : 클라이언트가 접속하면 중복되지않는 고유한 세션값 가짐-> 그 값을 유지함.(서버-클라이언트//네트워크:cookie 보기.)
			HttpSession session = req.getSession(); //로그인하면 세션 생김. 세션값은 계속 유지됨.
			session.setAttribute("logId", id);  //나중에 session.getAttribute("logId")해서 가져올 수 있음.
			session.setAttribute("responsibility", vo.getResponsibility());
			//정상적으로 로그인 처리되면
			try {
				resp.sendRedirect("boardList.do");
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("loginForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	
		
		
		
		

	}

}
