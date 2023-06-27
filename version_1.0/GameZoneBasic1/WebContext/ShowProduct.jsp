<%@page import="com.demo.beans.User"%>
<%@page import="com.demo.beans.Product"%>
<%@page import="com.demo.service.ProductServiceImpl"%>
<%@page import="com.demo.service.ProductService"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    header {
        background-color: #333;
        color: #fff;
        padding: 10px;
    }

    header a {
        color: #fff;
        text-decoration: none;
        margin-left: 10px;
    }

    div {
        display: flex;
        margin-top: 100px;
        flex-wrap: wrap;
        justify-content: center;
    }

    div > div {
        width: 250px;
        height: 300px;
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    form {
        display: inline-block;
        margin-top: 10px;
    }

    form button {
        background-color: #4CAF50;
        color: white;
        border: none;
        padding: 8px 12px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
    }

    footer {
        background-color: #333;
        color: #fff;
        padding: 10px;
        text-align: center;
        margin-top: auto;
    }

    div > div a {
        display: block;
        margin-bottom: 10px;
    }

    div > div img {
       width: 250px;
        height: auto;
    }
</style>
</head>
<body>
<%
ProductService ps= new ProductServiceImpl();
int pid=Integer.parseInt(request.getParameter("pid"));
Product p=ps.getProduct(pid);

%>
<%
User u = (User)session.getAttribute("user");
%>
<header>
		<b><a href="Welcome.jsp">GameZone Shopping Center</a></b> <a href="Welcome.jsp">Home</a> | <a
			href="#">Category</a> |
			<% if(u==null) {%> 
			<a href="Login.html">Login</a> | 
			<!-- <a href="ShowCart.jsp"> <i class="fa fa-shopping-cart" style="font-size:48px;color:red; "></i></a> -->
			<%} else { %>
			<a href="ShowCart.jsp"> <i class="fa fa-shopping-cart" style="font-size:48px;color:red; "></i></a>
			<% }%>
	</header>
<div style='margin-top:100px; width:100%'>

		<div style='width:100%;height: 100%'>
			<form action='addtocart' method='post'>
				<input type='hidden' name='pid' value='<%=p.getPid() %>' /> 
				<input type='hidden' name='price' value='<%=p.getPrice() %>' />
				<input type='hidden' name='qty' value='<%=p.getQty() %>' /> 
				<a href="ShowProduct.jsp?pid=<%=p.getPid() %>"><img src='<%=p.getImgurl() %>' alt="KEYBORD" width="250px"></a>
				<p><%=p.getPname() %></p>
				<p><%=p.getShortDisc()%></p>
				<p><%=p.getPrice() %></p>
			
				<button type='submit'>Add To Cart</button>
			</form>
		</div>
		
	</div>
</body>
</html>