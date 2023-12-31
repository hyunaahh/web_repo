package co.yedam.common;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.product.web.MainControl;
import co.yedam.product.web.ProductListControl;
import co.yedam.product.web.getProductControl;



public class FrontControl extends HttpServlet{

	Map<String, Command> map = new HashMap<>();
	
	@Override
	public void init(ServletConfig config) throws ServletException {
		
		map.put("/main.do", new MainControl());
		
		map.put("/productList.do", new ProductListControl()); //목록
		map.put("/getProduct.do", new getProductControl());
		
	}
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		req.setCharacterEncoding("UTF-8");
		String url = req.getRequestURI(); 
		
		String context = req.getServletContext().getContextPath(); 
			
		
		String page = url.substring(context.length()); 
			
		
		Command controller = map.get(page);  
		controller.execute(req, resp); 
		
	
	}
	
	
	
	
	
	
}
