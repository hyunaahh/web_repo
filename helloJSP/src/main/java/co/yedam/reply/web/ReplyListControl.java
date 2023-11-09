package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.common.PageDTO;
import co.yedam.reply.ServiceImpl.ReplyServiceImpl;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String path = "board/boardList.tiles";
		
		String bno = req.getParameter("bno"); //원본 글 번호 알면 목록 가져오도록 파라메터 하나 받아옴
		String page = req.getParameter("page"); 
		page = page == null? "1" : page; //페이지 파라메터가 없으면 걍 1페이지 보여주겠음.
		
		//페이지 계산하기
		ReplyService svc = new ReplyServiceImpl();
		PageDTO dto = new PageDTO(Integer.parseInt(bno), svc.getTotalCnt(Integer.parseInt(bno)), Integer.parseInt(page));
		
		
		
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno),  Integer.parseInt(page));
		
		//list, dto 같이 넘겨주기
		Map<String, Object> map = new HashMap();
		map.put("list", list);
		map.put("dto", dto); //dto란 이름으로 dto를 담아서 넘김
		
		
		//json으로 변환해주는 작업.
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd")
					.create();
		String json = gson.toJson(map);
		
		resp.setContentType("text/json;charset=utf-8"); //한글 안깨지게! 
		try {
			resp.getWriter().print(json); //요청한 곳에 응답데이터 넣어줌
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
