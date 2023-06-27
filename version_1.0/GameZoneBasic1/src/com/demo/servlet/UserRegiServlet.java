package com.demo.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.demo.beans.User;
import com.demo.service.UserService;
import com.demo.service.UserServiceImpl;

@WebServlet("/userregistration")
public class UserRegiServlet extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String username=request.getParameter("username");
		String password=request.getParameter("password");

		String email=request.getParameter("email");
		String mobile=request.getParameter("mobile");

		String addr=request.getParameter("addr");
		User u = new User(1,username,password,email,mobile,addr,1);
		
		UserService us=new UserServiceImpl();
		int status=us.registerUser(u);
		if(status>0) {
			RequestDispatcher rd = request.getRequestDispatcher("Login.html");
			rd.include(request, response);
		}else {
			RequestDispatcher rd = request.getRequestDispatcher("CreateAc.html");
			rd.include(request, response);
		}
		
	}

}
