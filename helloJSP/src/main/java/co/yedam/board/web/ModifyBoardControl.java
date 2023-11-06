package co.yedam.board.web;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.yedam.board.service.BoardService;
import co.yedam.board.service.BoardVO;
import co.yedam.board.serviceImpl.BoardServiceImpl;
import co.yedam.common.Command;

public class ModifyBoardControl implements Command{
	
	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		//파라메터받아옴 -> 데이터수정 -> 목록이동.
		BoardVO  vo ;
		
		String title = req.getParameter("title");
		String author = req.getParameter("author");
		String content = req.getParameter("content");
		String bno = req.getParameter("bno");
		
		
		vo = new BoardVO();
		vo.setTitle(title);
		vo.setAuthor(author);
		vo.setContent(content);
		vo.setBoardNo(Integer.parseInt(bno));
		
		
		
		
		BoardService svc = new BoardServiceImpl();
		if (svc.editBoard(vo)) { // 정상적으로 등록됐으면 보드목록으로 간다
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
		
		
		
		
	}//execute

}
