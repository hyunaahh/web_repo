package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.board.web.BoardListControl;
import co.yedam.board.web.GetBoardControl;


//url : .do로 끝나면 밑에 애들이 실행되도록 만듦.

public class FrontController extends HttpServlet {
	Map<String, Command> map = new HashMap<>(); // url값이랑 인터페이스구현클래스.(*command는 인터페이스)

	// init -> service
	@Override
	public void init() throws ServletException {
		map.put("/boardList.do", new BoardListControl());
		map.put("/getBoard.do", new GetBoardControl());
	}

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("frontController");
		String url = req.getRequestURI(); // 어떤 정보요청했는지 반환함 :getRequestURI- http://localhost:8080/helloJSP/??.do 에서
		System.out.println("url : " + url );	
		// helloJSP/??.do 이게 URI
		String context = req.getServletContext().getContextPath(); // helloJSP;
		System.out.println("context : " + context );
		
		String page = url.substring(context.length()); // 프로젝트명.
		System.out.println("page : " +page); // 콘솔 : /firstServlet.do
		
		Command controller = map.get(page); //키값이 들어오면 value 반환. 
		controller.execute(req, resp);
		
	
	}

} // end
