package co.yedam.product.service;

import lombok.Data;

@Data
public class ProductVO {

	public String prodCode;
	public String prodName;
	public String prodDesc;
	public int price;
	public int offPrice;
	public int likeIt;
	public String image;
	
	
}
