package co.yedam.common;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogoutControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		req.getSession().invalidate(); //세션 정보를 지워주는 invalidate
		//세션 정보 삭제 후에 main.do로 이동하기
		try {
			resp.sendRedirect("main.do");
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		
	}

}
