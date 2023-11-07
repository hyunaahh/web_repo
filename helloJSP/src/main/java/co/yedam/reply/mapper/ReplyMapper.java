package co.yedam.reply.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import co.yedam.board.service.BoardVO;
import co.yedam.board.service.MemberVO;
import co.yedam.reply.service.ReplyVO;

public interface ReplyMapper {
	//업무가 정해지면 이 기능을 mapper 안에다가 정해야 함.
	//인터페이스 
	public List<ReplyVO> replyList(int boardNo); //목록
	public ReplyVO selectReply(int replyNo); //한건조회
	public int insertReply(ReplyVO vo); //등록
	public int updateReply(ReplyVO vo); //수정
	public int deleteReply(int replyNo); //삭제
	
	
	
	
	
//mapper나 dao는 db에서 사용하는 용어 사용하는게 좋아! ex.select, insert, update, delete
//dao -> service 조합해서 막 쓰기 좋음.. 유용쓰..
}
