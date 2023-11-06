package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.service.BoardService;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class RemoveBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String bno = req.getParameter("bno");
			System.out.println("removeBOardContrrol : " + bno);
		
		BoardService svc = new BoardServiceImpl();
		if (svc.removeBoard(Integer.parseInt(bno))) { // 정상적으로 등록됐으면 보드목록으로 간다
			try {
				resp.sendRedirect("boardList.do"); // 저장하고 등록 추가된 정보 나옴
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("modifyForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
		
		

	}

}
