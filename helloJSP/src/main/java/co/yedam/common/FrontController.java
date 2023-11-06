package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.AddBoardControl;
import co.yedam.board.web.BoardFormControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;
import co.yedam.board.web.ModifyBoardControl;
import co.yedam.board.web.ModifyFormControl;
import co.yedam.board.web.RemoveBoardControl;
import co.yedam.board.web.RemoveFormControl;


//url : .do로 끝나면 밑에 애들이 실행되도록 만듦.

public class FrontController extends HttpServlet {
	Map<String, Command> map = new HashMap<>(); // url값이랑 인터페이스구현클래스.(*command는 인터페이스)

	// init -> service
	@Override
	public void init() throws ServletException {
		
		//메인페이지
		map.put("/main.do", new MainControl());
		//로그인
		map.put("/loginForm.do", new LogInFormControl());
		map.put("/login.do", new LogInControl());
		map.put("/logout.do", new LogoutControl());
		
		//회원목록 보이기
		map.put("/memberList.do", new MemberControl());
		
		map.put("/boardList.do", new BoardListControl()); //목록
		map.put("/getBoard.do", new GetBoardControl()); //조회
		map.put("/boardForm.do", new BoardFormControl()); //등록 - 화면만 열어줌
		map.put("/addBoard.do", new AddBoardControl()); //처리 - 등록한걸 처리하기.
		map.put("/modifyForm.do", new ModifyFormControl()); //수정 폼화면
		map.put("/modifyBoard.do", new ModifyBoardControl()); //실제 수정 처리하는 곳.
		map.put("/removeForm.do", new RemoveFormControl()); //삭제 폼화면 
		map.put("/removeBoard.do", new RemoveBoardControl()); //실제 삭제 처리하는 곳.
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("frontController");
		
		//Post방식으로 하면 이렇게 해줘야함
		req.setCharacterEncoding("UTF-8"); //요청정보의 한글 인코딩 방식
		
		String url = req.getRequestURI(); // 어떤 정보요청했는지 반환함 :getRequestURI- http://localhost:8080/helloJSP/??.do 에서
			System.out.println("url : " + url );	
		// helloJSP/??.do 이게 URI
		String context = req.getServletContext().getContextPath(); // helloJSP;
			System.out.println("context : " + context );
		
		String page = url.substring(context.length()); // 프로젝트명.
			System.out.println("page : " +page); // 콘솔 : /firstServlet.do
		
		Command controller = map.get(page); //키값이 들어오면 value 반환. 
		controller.execute(req, resp); //인터페이스 구현한걸 여기서 실행하도록! 
		
	
	}

} // end
