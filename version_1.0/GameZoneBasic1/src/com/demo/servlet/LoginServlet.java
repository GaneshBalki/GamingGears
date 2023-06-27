package com.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.demo.beans.User;
import com.demo.service.LoginService;
import com.demo.service.LoginServiceImpl;

@WebServlet("/loginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		LoginService ads = new LoginServiceImpl();
		
		String username=request.getParameter("username");
		String password=request.getParameter("password");
		User ld = ads.validateUser(username,password);
		System.out.println(ld);
		
		if(ld==null) {
			out.println("<h2 style='color:red'>Invalid UserName or PassWord</h2>");
			RequestDispatcher rd = request.getRequestDispatcher("Login.html");
			rd.include(request, response);
		}
		else {
			HttpSession session = request.getSession();
			//if(session.isNew()) {
				session.setAttribute("user", ld);
//			}else {
//				System.out.println("Old Session");
//				User u =(User)session.getAttribute("user");
//				System.out.println(u);
//			}
			RequestDispatcher rd1 = request.getRequestDispatcher("Welcome.jsp");
			rd1.forward(request, response);
			}

	}
}
