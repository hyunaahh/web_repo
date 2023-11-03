package co.yedam.board.web;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class firstServlet
 */
//@WebServlet("/firstServlet.do")
public class firstServlet extends HttpServlet {
	//최초요청일때만init -> 그담부터는 service-> destroy
	private static final long serialVersionUID = 1L;
       
 
    public firstServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	System.out.println("service실행"); //service하면 밑에 두겟두포스트 안함.
    	doGet(req, resp); //doget 호출해서 실행시켰음! . req 요청정보와 응답정보resp 받음! 
    }
    


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("text/html;charset=utf-8");
		String name = "홍길동";
		int age = 20;
		for(int i=0; i<5;i++) {
			response.getWriter().print("<p>"+ i +"번째 이름은" + name + ", 나이는" + age + "입니다."); //html코드
		}
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}
	
	
	

}
