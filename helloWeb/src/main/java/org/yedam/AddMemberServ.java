package org.yedam;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.yedam.service.MemberService;
import org.yedam.service.MemberServiceImpl;
import org.yedam.service.MemberVO;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

/**
 * Servlet implementation class AddMemberServ
 */
@WebServlet("/AddMemberServ.html") //주소임.=> 페이지실행시키려고 (중복되지않는 값으로 유니크하게만들면 됨)
public class AddMemberServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddMemberServ() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// ★★★ 웹페이지에 값을 넘기고싶을 때 !! 
		//http://localhost:8080/helloWeb/AddMemberServ.html?mid=M009&pass=9999&name=Kim&phone=010-9977-9999 
		// =>  servlet 주소에서는 ?뒤에 key:value 형식으로. ?뒤는 parameter . 메소드에 값을 넘기는것처럼.. 
		//(mid, pass, name, phone){mid..}
		String mid = request.getParameter("mid"); //mid라는 파라미터에 맵핑된 값을 mid에 넣었음. => M009
		String pass = request.getParameter("pass");
		String name = request.getParameter("name");
		String phone = request.getParameter("phone");
		
		//멤버 인스턴스 생성
		MemberVO vo = new MemberVO(mid, pass, name, phone); 
		
		MemberService svc = new MemberServiceImpl();
		PrintWriter out = response.getWriter();
		Gson gson = new GsonBuilder().create(); //Gson객체 생성
		//String json = gson.toJson(vo); //json문자열로!
		
		//Map.
		Map<String, Object> map = new HashMap<>();
		//map.put("retCode", "OK");
		//map.put("vo", vo);
		
		
		if(svc.addMember(vo)) {
			//retCode:"OK"}
			//out.print("{\"retCode\":\"OK\"}");
			//out.print(json);
			map.put("retCode", "OK");
			map.put("vo", vo);
		}else {
			//retCode":"NG"}
			//out.print("{\"retCode\":\"NG\"}");
			//out.print(json);
			map.put("retCode", "NG");
			map.put("vo", vo.getMid());
		
		}
		String json = gson.toJson(map); //json으로 문자열 출력.
		out.print(json);
		//svc.addMember(vo);
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
