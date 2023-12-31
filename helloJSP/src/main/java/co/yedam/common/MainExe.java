package co.yedam.common;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyVO;

public class MainExe {
	public static void main(String[] args) {
		
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		//학생아이디, 비밀번호, 이름, 학과, 생일
//		
//		StudentVO vo = new StudentVO();
//		vo.setStudentId("newbie");
//		vo.setStudentName("신입생");
//		vo.setStudentPassword("1234");
//		vo.setStudentDept("영문학과");
//		
//		try {
//			vo.setStudentBirthday(sdf.parse("2001-01-01"));
//		}catch(ParseException e){
//			e.printStackTrace();
//		}
//		
//		StudentService svc = new StudentServiceImpl();
//		if(svc.addStudent(vo)) {
//			System.out.println("성공");
//		}else {
//			System.out.println("에러");
//		}
//		
//		//전체조회
//		svc.listStudent()
//			.forEach(student -> System.out.println(student));


		SqlSession session = 
				DataSourceMybatis.getInstance().openSession(true);
		ReplyMapper mapper = session.getMapper(ReplyMapper.class);

		List<ReplyVO> list = mapper.replyList(2, 1); //(게시글번호, 첫번쩨페이지)
		list.forEach(vo -> System.out.println(vo));
		//테스트해보기! 
		System.out.println();
		
		
		List<Map<String, Object>> map = mapper.getReplyCountByWriter();
		System.out.println(map);
		
	} // void min
} // class MainEXE
