package co.yedam.reply.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import co.yedam.common.Command;
import co.yedam.reply.ServiceImpl.ReplyServiceImpl;
import co.yedam.reply.service.ReplyService;

public class RemoveReplyControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String rno = req.getParameter("rno"); // 넘긴 파라메터 값을 받아옴
		ReplyService svc = new ReplyServiceImpl();
		
		
		Map<String, String> map = new HashMap<>();
		
		if(svc.delReply(Integer.parseInt(rno))) {
			map.put("retCode", "OK");
		}else {
			map.put("retCode", "NG");
		}
		
		
		Gson gson = new GsonBuilder().create();
		try {
			resp.getWriter().print(gson.toJson(map));
		} catch (IOException e) {
			
			e.printStackTrace();
		}
		
		
	}

}
