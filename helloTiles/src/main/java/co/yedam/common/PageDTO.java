package co.yedam.common;

public class PageDTO {

	int total; //전체건수
	int currentPage; //현재페이지
	boolean next, prev; //이전 or 이후 페이지 
	int startPage, endPage; 
	int boardNo; //어떤글에 대한 페이지넘버인지 알게
	
	//생성자
	public PageDTO(int boardNo, int total, int currentPage) {
		//실제 마지막페이지
		int realEnd = (int)Math.ceil(total / 5.0);
				
		this.boardNo = boardNo;
		this.total = total;
		this.currentPage = currentPage;
		
		
		//1page 3p ~ 10page. 이전이후페이지이ㅣㅆ는지도 체크.
		this.endPage = (int)Math.ceil(currentPage/10.0) * 10; //math ceil 더블로반환해서 int로 바ㅜ꺼저야함.
		this.startPage = this.endPage - 9;
		
		this.endPage = (this.endPage > realEnd) ? realEnd : this.endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage  < realEnd; //실제마지막페이지보다 작으면 이후페이지 있음
	}
	
	
	
	
}
