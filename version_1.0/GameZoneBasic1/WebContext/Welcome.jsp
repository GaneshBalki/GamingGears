<%@page import="com.demo.beans.User"%>
<%@page import="com.demo.beans.Product"%>
<%@page import="java.util.List"%>
<%@page import="com.demo.service.ProductService"%>
<%@page import="com.demo.service.ProductServiceImpl"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@page isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>GameZone Shopping Center</title>
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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<body>
<%
User u = (User)session.getAttribute("user");
%>
	<header>
		<b><a href="Welcome.jsp">GameZone Shopping Center</a></b> <a href="Welcome.jsp">Home</a> | <a
			href="#">Category</a> |
			<% if(u==null) {%> 
			<a href="Login.html">Sign In</a> | <a href="CreateAc.html">Sign Up</a> 
			<!-- <a href="ShowCart.jsp"> <i class="fa fa-shopping-cart" style="font-size:48px;color:red; "></i></a> -->
			<%} else { %>
			<a href="ShowCart.jsp"> <i class="fa fa-shopping-cart" style="font-size:48px;color:white; "></i></a>
			<% }%>
	</header>
	<%
	ProductService ps = new ProductServiceImpl();
	List<Product> plist = ps.getAllProducts();
	%>
	<table>
	<tr>
	<td><a href="#"><img src='https://rb.gy/vdg0y' alt="KEYBORD" width="100px"></a></td>
	<td><a href="#"><img src='https://rb.gy/rvl07' alt="KEYBORD" width="100px"></a></td>
	<td><a href="#"><img src='https://rb.gy/uetxp' alt="KEYBORD" width="100px"></a></td>
	<td><a href="#"><img src='https://rb.gy/xn6by' alt="KEYBORD" width="100px"></a></td>
	</tr>
	<tr>
	<td>KEYBORD</td>
	<td>MOUSE</td>
	<td>I5 PROC.</td>
	<td>Controller</td>
	</tr>
	</table>
	<div style='display: flex;  flex-direction: row-reverse; margin-top:100px;'>
	<% 
	for(Product p:plist){
		%>
		<div style='width: fit-content;height: fit-content'>
			<form action='addtocart' method='post'>
				<input type='hidden' name='pid' value='<%=p.getPid() %>' /> 
				<input type='hidden' name='price' value='<%=p.getPrice() %>' />
				<input type='hidden' name='qty' value='<%=p.getQty() %>' /> 
				<a href="ShowProduct.jsp?pid=<%=p.getPid() %>"><img src='<%=p.getImgurl() %>' alt="KEYBORD" width="250px"></a>
				<p><%=p.getPname() %></p>
				<p><%=p.getPrice() %></p>
			
				<button type='submit'>Add To Cart</button>
			</form>
		</div>
		
		<%
	}
	%></div>
	<c:forEach var='product' items='${plist}'>
		<div style='width: fit-content;height: fit-content'>
			<form action='addtocart' method='post'>
				<input type='hidden' name='pid' value='${product.pid}' /> 
				<input type='hidden' name='cid' value='${product.catId}' /> 
				<a href='${product.imgurl}'>Product Image</a>
				<p>${product.getPname()}</p>
				<p>${product.price}</p>
				<p>${product.shortDisc}</p>
				<button type='submit'>Add To Cart</button>
			</form>
		</div>
	</c:forEach>

	<footer style='margin-bottom: 0px;'>
		<p>All Right are reserved @gamezone.com</p>
	</footer>

</body>
</html>