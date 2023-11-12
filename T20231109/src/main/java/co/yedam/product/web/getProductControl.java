package co.yedam.product.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.yedam.common.Command;
import co.yedam.product.service.ProductService;
import co.yedam.product.service.ProductVO;
import co.yedam.product.serviceImpl.ProductServiceImpl;

public class getProductControl implements Command {

	@Override
	public void execute(HttpServletRequest req, HttpServletResponse resp) {
		String path = "product/getProduct.tiles"; 
		
		String pno = req.getParameter("pno");
		ProductService svc = new ProductServiceImpl();
		ProductVO vo = svc.getProduct(Integer.parseInt(pno));
		req.setAttribute("vo", vo);
		
		List<ProductVO> list = svc.productListStar();
		req.setAttribute("list", list);
		
		//요청재지정
		try {
		req.getRequestDispatcher(path).forward(req, resp);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
