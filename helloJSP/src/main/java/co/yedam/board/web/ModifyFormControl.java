package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyFormControl implements Command {
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String bno = req.getParameter("bno"); //게시글번호를 하나 알고있으면 전체 정보를 알수있는 method 이용할거임
			System.out.println("modifyFormcontrol : " + bno);	
		BoardService svc = new BoardServiceImpl();
		BoardVO vo = svc.getBoard(Integer.parseInt(bno)); //getboard는 int 매개값으로 받음.
		req.setAttribute("vo", vo); // 요청정보에 vo값도 담아서 보낼거임. 그러면 밑에 모디파이폼ㅇ 페이지에서 읽어들일수 있음.
		
		
		//수정화면오픈
		try {
			req.getRequestDispatcher("WEB-INF/board/modifyForm.jsp").forward(req, resp);
		} catch (ServletException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
