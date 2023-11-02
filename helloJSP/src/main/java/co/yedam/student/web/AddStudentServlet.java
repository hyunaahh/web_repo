package co.yedam.student.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Enumeration;

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

@WebServlet("/addStudent.do")
public class AddStudentServlet extends HttpServlet{
	
//init -> service -> destroy
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		StudentService svc = new StudentServiceImpl();
		StudentVO vo = new StudentVO();
		
		//한글처리.
		req.setCharacterEncoding("utf-8"); 
		//resp.setContentType("text/json;charset=utf-8");
		
		 //파라미터 
		 String id = req.getParameter("id");
		 String name = req.getParameter("name");
		 String pwd = req.getParameter("password");
		 String dept = req.getParameter("dept");
		 String btd = req.getParameter("btd");
		
		 System.out.println(id+"&"+name+"&"+pwd+"&"+dept+"&"+btd);
	
		 
		//내가 저 위에 vo에 값을 넣어줘야해! 
		vo.setStudentId(id);
		vo.setStudentName(name);
		vo.setStudentPassword(pwd);
		vo.setStudentDept(dept);
		try {
			vo.setStudentBirthday(sdf.parse(btd));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
		Gson gson = new GsonBuilder()
				.setDateFormat("yyyy-MM-dd")
				.create();
		String json = gson.toJson(vo);
		
		
		PrintWriter out = resp.getWriter();
		out.println(json);
		
		
		if(svc.addStudent(vo)) {	
			resp.getWriter().print("{\"retCode\" : \"OK\"}");
		}else {
			resp.getWriter().print("{\"retCode\" : \"NG\"} ");
		}
		
		
	}
	
}
