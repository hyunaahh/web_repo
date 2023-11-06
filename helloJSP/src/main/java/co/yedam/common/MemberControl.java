package co.yedam.common;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.MemberVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;

public class MemberControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		BoardService svc = new BoardServiceImpl();
		List<MemberVO> mlist = svc.memberList();

		req.setAttribute("list", mlist);

		try {
			req.getRequestDispatcher("WEB-INF/main/memberList.jsp").forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	} // execute

}
