package co.yedam.board.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class BoardListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		//서블릿, jsp: 서블릿(컨트롤:데이터처리) = > jsp(뷰)
		BoardService svc = new BoardServiceImpl();
			List<BoardVO> list = svc.boardList();
			
			req.setAttribute("list", list); //list 담아서 boardList.jsp로 보냄.
			
			//페이지요청(boardList.do) - > 요청 재지정(board/boardList.jsp)
			RequestDispatcher rd = req.getRequestDispatcher("WEB-INF/board/boardList.jsp"); //서블릿페이지에ㅓㅅ 어떤 다른페이지로 이동할 정보를 넣어주고, 
			try {
				rd.forward(req, resp);
			}catch(Exception e) {
				e.printStackTrace();
			}
			
	}
	

	}
