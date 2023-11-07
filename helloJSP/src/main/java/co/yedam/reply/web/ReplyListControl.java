package co.yedam.reply.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.ServiceImpl.ReplyServiceImpl;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;

public class ReplyListControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String bno = req.getParameter("bno"); //원본 글 번호 알면 목록 가져오도록 파라메터 하나 받아옴
		ReplyService svc = new ReplyServiceImpl();
		List<ReplyVO> list = svc.replyList(Integer.parseInt(bno));
		
		//json으로 변환해주는 작업.
		Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd")
					.create();
		String json = gson.toJson(list);
		
		resp.setContentType("text/json;charset=utf-8"); //한글 안깨지게! 
		try {
			resp.getWriter().print(json);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		

	}

}
