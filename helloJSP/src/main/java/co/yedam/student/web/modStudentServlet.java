package co.yedam.student.web;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

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

@WebServlet("/editStudent.do")

public class modStudentServlet extends HttpServlet{
	
	//수정 -> 파라메터 넘겨주고 => 바뀐정보 전송하기. -> OK/NG
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		SimpleDateFormat sdf = new SimpleDateFormat();
		StudentService svc = new StudentServiceImpl();
		req.setCharacterEncoding("utf-8"); 
		StudentVO vo = new StudentVO();
		
		//파라미터
		//String id = req.getParameter("id");
		String name = req.getParameter("name");
		String pwd = req.getParameter("password");
		String btd = req.getParameter("btd");
		System.out.println(name+"&"+pwd+"&"+btd);
		
		//vo.setStudentId(id);
		vo.setStudentName(name);
		vo.setStudentPassword(pwd);
		try {
			vo.setStudentBirthday(sdf.parse(btd));
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Gson gson = new GsonBuilder()
				.setDateFormat("yyy-MM-dd")
				.create();
		
		if(svc.editStudent(vo)) {
			resp.getWriter().print("{\"retCode\" : \"OK\"}");
		}else {
			resp.getWriter().print("{\"retCode\" : \"NG\"} ");
		}
				
	}

}
