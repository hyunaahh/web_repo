package co.yedam.board.serviceImpl;

import java.util.List;

import co.yedam.board.service.MemberService;
import co.yedam.board.service.MemberVO;

public class MemberServiceImpl implements MemberService {
	BoardDAO dao = new BoardDAO();
	
	@Override
	public List<MemberVO> memberList() {
		return dao.memberList();
	}

}
