package org.yedam.service;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//lombok 통해서 만듦 @~~ 

@Setter
@Getter
@ToString

@Data
@AllArgsConstructor //모든 필드값 생성자 생김.
@NoArgsConstructor // 기본생성자

public class MemberVO {
	private String mid;
	private String pass;
	private String name;
	private String phone;
	
	
	/*public String getMid() {
		return mid;
	}
	public void setMid(String mid) {
		this.mid = mid;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}*/
}
