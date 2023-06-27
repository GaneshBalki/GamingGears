package com.demo.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.demo.beans.User;
import com.demo.service.ProductService;
import com.demo.service.ProductServiceImpl;

@WebServlet("/addtocart")
public class AddToCart extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ProductService ps= new ProductServiceImpl();
		
		int pid=Integer.parseInt(request.getParameter("pid"));
		float price=Float.parseFloat(request.getParameter("price"));
		HttpSession session=request.getSession();
		User u = (User) session.getAttribute("user");
		int custid=u.getCustid();
		System.out.println(u);
		int status=ps.addtocart(pid,custid,price);
		if(status>0) {
			RequestDispatcher rd=request.getRequestDispatcher("Welcome.jsp");
			rd.forward(request, response);
		}
	}

}
