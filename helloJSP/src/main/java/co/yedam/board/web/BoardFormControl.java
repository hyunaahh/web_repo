package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.common.Command;

public class BoardFormControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		 HttpSession session = req.getSession();
		
		 
			if(session.getAttribute("logId") == null){
				try {
				resp.sendRedirect("loginForm.do"); //로그인정보 없으면 로그인폼으로
			}catch(IOException e) {
				e.printStackTrace();
			}
			}else {

		try {
			req.getRequestDispatcher("WEB-INF/board/boardForm.jsp") //로그인정보있으면 등록화면으로 이동.
			.forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			}
		
	}

}
