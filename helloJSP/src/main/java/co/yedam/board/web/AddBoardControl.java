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

public class AddBoardControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {

		BoardVO vo = new BoardVO();
		
		if (req.getMethod().equals("GET")) {
			// GET방식 할 때.
			// 제목, 내용, 작성자,
			// input에서 name이 파라메터임.
			String title = req.getParameter("title");
			String author = req.getParameter("author");
			String content = req.getParameter("content");

			// form에 action넣고 일로 넘어온거임.
			vo.setTitle(title);
			vo.setContent(content);
			vo.setAuthor(author);

//		BoardService svc = new BoardServiceImpl();
//		if(svc.addBoard(vo)) { //정상적으로 등록됐으면 보드목록으로 간다
//			try {
//				resp.sendRedirect("boardList.do"); // 저장하고 등록 추가된 정보 나옴
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}else {
//			try {
//				resp.sendRedirect("boardForm.do");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
			
		} else if (req.getMethod().equals("POST")) {
			// post방식으로 파일전송
			String saveDir = req.getServletContext().getRealPath("images"); // 이 경로에 파일 업로드 (webapp밑에 images 폴더 생성했음)
			int size = 5 * 1024 * 1024; // 최대 사이즈
			// MultipartRequest mr;
			// 멀티파트요청을 완료하면
			try {
				MultipartRequest mr = //
						new MultipartRequest(req, // 요청정보
								saveDir, // 파일이 저장될 정보
								size, // 파일크기
								"UTF-8", // 인코딩방식
								new DefaultFileRenamePolicy());// 리네임정책
				String title = mr.getParameter("title"); // 파라미터 가져오기.
				String author = mr.getParameter("author");
				String content = mr.getParameter("content");
				String img = mr.getFilesystemName("img");

				// 이 네개의 값을 담아줌
				vo = new BoardVO();
				vo.setTitle(title);
				vo.setAuthor(author);
				vo.setContent(content);
				vo.setImage(img);

			} catch (Exception e) {
				e.printStackTrace();
			}

		} // if

		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(vo)) { // 정상적으로 등록됐으면 보드목록으로 간다
			try {
				resp.sendRedirect("boardList.do"); // 저장하고 등록 추가된 정보 나옴
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			try {
				resp.sendRedirect("boardForm.do");
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}// execute

}// end
