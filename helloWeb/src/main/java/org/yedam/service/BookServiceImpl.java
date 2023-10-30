package org.yedam.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.yedam.common.DataSource;

public class BookServiceImpl implements BookService {
	DataSource dataSource = DataSource.getInstance();
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;

	@Override
	public List<BookVO> bookList() {
		List <BookVO> list = new ArrayList<>();
		String sql = "SELECT * FROM BOOK";
		
		conn = dataSource.getConnection();
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			while(rs.next()) {
				BookVO vo = new BookVO();
				vo.setCode(rs.getString("book_code"));
				vo.setTitle(rs.getString("book_title"));
				vo.setAuthor(rs.getString("book_author"));
				vo.setPress(rs.getString("book_press"));
				vo.setPrice(rs.getString("book_price"));
			}
		}catch(SQLException e) {
			e.printStackTrace();
		}finally {
			try {
				if(rs != null)
					rs.close();
				if(psmt !=null)
					psmt.close();
				if(conn !=null)
					conn.close();
				
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		return list;
	}
		


}
