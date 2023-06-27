package com.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.demo.beans.Product;

public class ProductDaoImpl implements ProductDao{
	private static Connection conn;
	private static PreparedStatement psgetProds,psaddtocart,psshowcart,psgetProd,psremove;
	static {
		conn=DBUtils.getMyConnection();
		try {
			psgetProds= conn.prepareStatement("select * from Product");
			psaddtocart=conn.prepareStatement("Insert into Cart values (?,?,?)");
			psshowcart= conn.prepareStatement("Select product.* from Product, cart where Product.pid=cart.pid and cart.custId = ?");
			psgetProd= conn.prepareStatement("select * from Product where pid=?");
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
	}
	@Override
	public List<Product> getAllProducts() {
		List<Product> plist=new ArrayList<>();
		try {
			
			ResultSet rs=psgetProds.executeQuery();
			while(rs.next()) {
				//(int pid,int catId, String pname,. String shortDisc, String imgurl, int qty, float price) {
				plist.add(new Product(rs.getInt(1),rs.getInt(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getInt(6),rs.getFloat(7)));
				
			}
			return plist;
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		return null;
	}
	@Override
	public int addtocart(int pid, int custid,float price) {
	
		try {
			
			
			psaddtocart.setInt(1, custid);
			psaddtocart.setInt(2, pid);
			psaddtocart.setFloat(3, price);
			int status = psaddtocart.executeUpdate();
			return status;
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		
		return 0;
	}
	@Override
	public List<Product> showcart(int custid) {
		List<Product> plist=new ArrayList<>();
		try {
			psshowcart.setInt(1, custid);
			ResultSet rs=psshowcart.executeQuery();
			while(rs.next()) {
				//(int pid,int catId, String pname,. String shortDisc, String imgurl, int qty, float price) {
				plist.add(new Product(rs.getInt(1),rs.getInt(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getInt(6),rs.getFloat(7)));
				
			}
			return plist;
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		
		return null;
	}
	@Override
	public Product getProduct(int pid) {
	   Product p=null;
		try {
			psgetProd.setInt(1, pid);
			ResultSet rs=psgetProd.executeQuery();
			if(rs.next()) {
				
			p=new Product(rs.getInt(1),rs.getInt(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getInt(6),rs.getFloat(7));
				
			}
			return p;
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		return null;
	}
	@Override
	public int removeProductFromCart(int pid) {
		try {
			///not complete
			int status = psaddtocart.executeUpdate();
			return status;
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
		return 0;
	}

}
