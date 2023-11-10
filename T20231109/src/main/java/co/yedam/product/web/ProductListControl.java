package co.yedam.product.web;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.mvel2.sh.ShellSession;

import co.yedam.common.Command;
import co.yedam.product.service.ProductVO;



public class ProductListControl implements Command {

	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		
		String path = "product/productList.tiles";
				
		List<ProductVO> list = new ArrayList<>();
		list.add(new ProductVO());
		req.setAttribute("list", list);
		
		try {
			req.getRequestDispatcher(path).forward(req, resp);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
