package co.yedam.board.serviceImpl;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.admin.service.MemberVO;
import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;

public class BoardDAO {

	// 목록 ,단건조회, 등록, 수정, 삭제
	DataSource ds = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	String sql;

	public void close() {

		try {
			if (rs != null)
				rs.close();
			if (psmt != null)

				psmt.close();
			if (conn != null)

				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}//close

	public List<BoardVO> selectList() {
		sql = "select * from board order by board_no";
		conn = ds.getConnection();
		List<BoardVO> list = new ArrayList<>();
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			
			while (rs.next()) {
				BoardVO vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setAuthor(rs.getString("author"));
				vo.setWriteDate(rs.getDate("write_Date"));
				vo.setViewCnt(rs.getInt("view_cnt"));
				list.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;

	}

	public BoardVO select(int boardNo) {
		sql = "select * from board where board_no=?";
		conn = ds.getConnection();
		
		BoardVO vo = new BoardVO();
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			rs = psmt.executeQuery();
			if(rs.next()) {
				vo = new BoardVO();
				vo.setBoardNo(rs.getInt("board_no"));
				vo.setContent(rs.getString("content"));
				vo.setImage(rs.getString("image"));
				vo.setLastUpdate(rs.getDate("last_update"));
				vo.setTitle(rs.getString("title"));
				vo.setAuthor(rs.getString("author"));
				vo.setWriteDate(rs.getDate("write_Date"));
				vo.setViewCnt(rs.getInt("view_cnt"));
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return vo;
	}

	public int insert(BoardVO vo) {
		String sql = "insert into board(board_no, title, content, author, image) values (seq_board.nextval,?,?,?,?)";
		
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			//psmt.setInt(1, vo.getBoardNo());
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getAuthor());
			psmt.setString(4, vo.getImage());
			
			int r = psmt.executeUpdate();
			return r;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0; //처리된 건수가 없음 : 에러
	}

	public int update(BoardVO vo) {
		sql = "update board set title=?, content=?, image=nvl(?, image), last_update=sysdate where board_no=?";
		conn = ds.getConnection();
		
		
		int r=0;
		try {
			//vo = new BoardVO();
			psmt = conn.prepareStatement(sql);
			psmt.setInt(4, vo.getBoardNo());
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getImage());
			//psmt.setString(4, sdf.format(vo.getLastUpdate()));
			r = psmt.executeUpdate();
			return r;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}

	
	public int delete(int boardNo) {
		sql = "delete from board where board_no=?";
		
		conn = ds.getConnection();
		//BoardVO vo = new BoardVO();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			int r = psmt.executeUpdate();
			return r;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	
	}
	
	//조회수 증가
	public int updateCnt(int boardNo) {
		sql = "update board set view_cnt = view_cnt+1 where board_no=?";
		int r=0;
		conn = ds.getConnection();
	
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			r = psmt.executeUpdate();
			return r;
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0;
	}
	
	//로그인: 아이디와 비번을 받아서 값이 있는지 없는지 확인 -> 조회값을 boolean으로 받겠..
	public MemberVO getUser(String id, String pw) {
		sql = "SELECT * FROM MEMBER WHERE MID=? AND PASS=?";
		conn = ds.getConnection();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, id);
			psmt.setString(2, pw);
			rs = psmt.executeQuery();
			if(rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));
				vo.setName(rs.getString("name"));
				vo.setPass(rs.getString("pass"));
				vo.setPhone(rs.getString("phone"));
				vo.setResponsibility(rs.getString("responsibility"));
				return vo;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			close();
		}
		return null;
	}
	
	//회원 목록 보여주기
	public List<MemberVO> memberList() {
		sql = "select * from member";
		conn = ds.getConnection();
		List<MemberVO> list = new ArrayList<>();
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			
			while (rs.next()) {
				MemberVO vo = new MemberVO();
				vo.setMid(rs.getString("mid"));				
				vo.setPass(rs.getString("pass"));				
				vo.setName(rs.getString("name"));				
				vo.setPhone(rs.getString("phone"));				
				vo.setResponsibility(rs.getString("responsibility"));				
				list.add(vo);
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return list;

	}
	
	
	
}
