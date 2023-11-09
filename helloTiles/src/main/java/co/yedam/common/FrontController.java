package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.admin.web.MemberListControl;
import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;


//url : .do로 끝나면 밑에 애들이 실행되도록 만듦.

public class FrontController extends HttpServlet {
	Map<String, Command> map = new HashMap<>(); // url값이랑 인터페이스구현클래스.(*command는 인터페이스)

	// init -> service
	@Override
	public void init() throws ServletException {
		
		map.put("/boardList.do", new BoardListControl()); //목록
		map.put("/memberList.do", new MemberListControl());
		map.put("/getBoard.do", new GetBoardControl());
		map.put("/replyList.do", new ReplyListControl());
		
		
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Post방식으로 하면 이렇게 해줘야함
		req.setCharacterEncoding("UTF-8"); //요청정보의 한글 인코딩 방식
		
		String url = req.getRequestURI(); // 어떤 정보요청했는지 반환함 :getRequestURI- http://localhost:8080/helloJSP/??.do 에서
			System.out.println("url : " + url );	
		// helloJSP/??.do 이게 UR
		String context = req.getServletContext().getContextPath(); // helloJSP;
			System.out.println("context : " + context );
		
		String page = url.substring(context.length()); // 프로젝트명.
			System.out.println("page : " +page); // 콘솔 : /firstServlet.do
		
		Command controller = map.get(page); //키값이 들어오면 value 반환. 
		controller.execute(req, resp); //인터페이스 구현한걸 여기서 실행하도록! 
		
	
	}

} // end
