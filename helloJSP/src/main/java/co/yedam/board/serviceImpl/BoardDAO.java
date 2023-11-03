package co.yedam.board.serviceImpl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import co.yedam.board.service.BoardVO;
import co.yedam.common.DataSource;
import co.yedam.student.service.StudentVO;

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
				rs.close();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			close();
		}
		return vo;
	}

	public int insert(BoardVO vo) {
		String sql = "insert into board(board_no, title, content, author, write_date, view_cnt, image, last_update) values (?,?,?,?,?,?,nvl(?, image),?)";
		
		conn = ds.getConnection();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, vo.getBoardNo());
			psmt.setString(2, vo.getTitle());
			psmt.setString(3, vo.getContent());
			psmt.setString(4, vo.getAuthor());
			psmt.setString(5, sdf.format(vo.getWriteDate()));
			psmt.setString(6, sdf.format(vo.getViewCnt()));
			psmt.setString(7, vo.getImage());
			psmt.setString(8, sdf.format(vo.getLastUpdate()));
			int r = psmt.executeUpdate();
			
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return 0; //처리된 건수가 없음 : 에러
	}

	public int update(BoardVO vo) {
		sql = "update board set  by title=?, content=?, image=nvl(?, image), last_update=sysdate where board_no=?";
		conn = ds.getConnection();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		int r=0;
		try {
			vo = new BoardVO();
			psmt = conn.prepareStatement(sql);
			psmt.setInt(5, vo.getBoardNo());
			psmt.setString(1, vo.getTitle());
			psmt.setString(2, vo.getContent());
			psmt.setString(3, vo.getImage());
			psmt.setString(4, sdf.format(vo.getLastUpdate()));
			r = psmt.executeUpdate();
			
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return r;
	}

	
	public int delete(int boardNo) {
		sql = "delete from board where board_no=?";
		int r=0;
		conn = ds.getConnection();
		BoardVO vo = new BoardVO();
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, boardNo);
			r = psmt.executeUpdate();
			
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			close();
		}
		return r;
	
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
	
	
}
