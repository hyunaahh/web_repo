package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.student.service.StudentService;
import co.yedam.student.service.StudentVO;
import co.yedam.student.serviceImpl.StudentServiceImpl;

@WebServlet("/getStudent.do")

public class GetStudentServlet extends HttpServlet{
	
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		StudentService svc = new StudentServiceImpl();	
		
		
		req.setCharacterEncoding("utf-8"); 
		resp.setContentType("text/json;charset=utf-8");
		
		String id = req.getParameter("id");
		
		StudentVO vo = svc.getStudent(id);
		
		Gson gson = new GsonBuilder()
				.setDateFormat("yyyy-MM-dd")
					.create();
		
		PrintWriter out = resp.getWriter();
		
		Map<String, Object> map = new HashMap();
		
		
				
		
		if(svc.getStudent(id) == null) {
			
			map.put("retCode", "NG");
		}else {
			map.put("retCode", "OK");
			map.put("vo", vo);
		}
		
		String json = gson.toJson(map);
		out.println(json);
		}
		
		
	}
	

	
	
	


