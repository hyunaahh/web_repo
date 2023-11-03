package co.yedam.common;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class FirstControl implements Command {
@Override
public void execute(HttpServletRequest req, HttpServletResponse resp) {
	// TODO Auto-generated method stub
	System.out.println("first");
}
}
