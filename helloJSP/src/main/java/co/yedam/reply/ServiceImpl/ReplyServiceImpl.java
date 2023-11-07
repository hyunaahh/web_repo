package co.yedam.reply.ServiceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;

import co.yedam.board.mapper.BoardMapper;
import co.yedam.common.DataSourceMybatis;
import co.yedam.reply.mapper.ReplyMapper;
import co.yedam.reply.service.ReplyService;
import co.yedam.reply.service.ReplyVO;

public class ReplyServiceImpl implements ReplyService {

	SqlSession sqlSession = DataSourceMybatis.getInstance().openSession(true); //true 넣어주면 자동 commit됨.
	ReplyMapper mapper = sqlSession.getMapper(ReplyMapper.class); //인터페이스 , 실제인스턴스
	
	@Override
	public List<ReplyVO> replyList(int boardNo) {
		return mapper.replyList(boardNo);
	}
	
	@Override
	public ReplyVO getReply(int replyNo) {
		return mapper.selectReply(replyNo);
	}
	
	@Override
	public boolean addReply(ReplyVO vo) {
		return mapper.insertReply(vo)==1;
	}
	
	@Override
	public boolean editReply(ReplyVO vo) {
		return mapper.updateReply(vo) == 1;
	}
	
	@Override
	public boolean delReply(int replyNo) {
		return mapper.deleteReply(replyNo) ==1;
	}

	
//	public List<ReplyVO> replyList(int boardNo); //목록
//	public ReplyVO selectReply(int replyNo); //한건조회
//	public int insertReply(ReplyVO vo); //등록
//	public int updateReply(ReplyVO vo); //수정
//	public int deleteReply(int replyNo); //삭제
	
}
