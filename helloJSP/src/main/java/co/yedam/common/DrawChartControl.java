package co.yedam.common;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.reply.ServiceImpl.ReplyServiceImpl;
import co.yedam.reply.service.ReplyService;

public class DrawChartControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		//Json 포맷으로 json데이터 넘겨주고 => [작성자, 건수] 값들을 받아와서 자바스크립트로 그려주면 됨.
		
		ReplyService svc = new ReplyServiceImpl();
		List<Map<String, Object>> list = svc.getReplyCountByWriter();
		
		
		Gson gson = new GsonBuilder().create();
		try {
			resp.getWriter().print(gson.toJson(list));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		//서버에 주소쳐서 들어가보면 배열안에 오브젝트로 나옴.!

	}

}
