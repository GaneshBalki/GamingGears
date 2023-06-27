<%@page import="com.demo.beans.User"%>
<%@page import="com.demo.beans.Product"%>
<%@page import="java.util.List"%>
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
<header>
		<b><a href="Welcome.jsp">GameZone Shopping Center</a></b> <a href="Welcome.jsp">Home</a> | <a
			href="#">Category</a> |
	</header>
<%

User u = (User) session.getAttribute("user");
int custid=u.getCustid();

ProductService ps = new ProductServiceImpl();
List<Product> plist =ps.showcart(custid);

float total_price =0;

%>
<table border="1">
<tr> <th> ProductImg </th><th> Product Name</th><th>Product Price</th><th>Action</th></tr>
	<% 
	for(Product p:plist){
		%>
	
		<tr> 
			<td> <a href="ShowProduct.jsp?pid=<%=p.getPid()%>"><img src='<%=p.getImgurl() %>' alt="KEYBORD" width="120px"></a> </td>
			<td> <%=p.getPname() %></td>
			<td><%=p.getPrice() %></td>
			<td><a href="#" style='text-decoration:none'>+ </a> | <a href="removeFromCart?pid=<%=p.getPid() %>" style='text-decoration:none'> -</a></td>
		</tr>
		<%
		total_price = total_price + p.getPrice();
		%>
		<%-- <div style='width: fit-content;height: fit-content'>
			<form action='addtocart' method='post'>
				<input type='hidden' name='pid' value='<%=p.getPid() %>' /> 
				<input type='hidden' name='price' value='<%=p.getPrice() %>' />
				<input type='hidden' name='qty' value='<%=p.getQty() %>' /> 
				<a href="#"><img src='<%=p.getImgurl() %>' alt="KEYBORD" width="250px"></a>
				<p><%=p.getPname() %></p>
				<p><%=p.getPrice() %></p>
			
				<button type='submit'>Add To Cart</button>
			</form>
		</div> --%>
		
		<%
	}
	%>
	</table>
	<h2> Total Cart Price : <%=total_price %></h2>
	
	<footer style='margin-bottom: 0px;'>
		<p>All Right are reserved @gamezone.com</p>
	</footer>
</body>
</html>