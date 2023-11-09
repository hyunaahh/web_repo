package co.yedam.admin.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.admin.service.MemberVO;
import co.yedam.common.Command;


public class MemberListControl implements Command {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String path = "member/memberList.tiles";
				
		List<MemberVO> list = new ArrayList<>();
		list.add(new MemberVO());
		req.setAttribute("list", list);
		
		try {
			req.getRequestDispatcher(path).forward(req, resp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	} // execute

}
