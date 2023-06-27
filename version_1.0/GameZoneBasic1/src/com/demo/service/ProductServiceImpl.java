package com.demo.service;

import java.util.List;

import com.demo.beans.Product;
import com.demo.dao.ProductDao;
import com.demo.dao.ProductDaoImpl;

public class ProductServiceImpl implements ProductService{
	ProductDao pdao;
	
	public ProductServiceImpl() {
		super();
		this.pdao = new ProductDaoImpl();
	}

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return pdao.getAllProducts();
	}

	@Override
	public int addtocart(int pid, int custid,float price) {
		// TODO Auto-generated method stub
		return pdao.addtocart(pid,custid,price);
	}

	@Override
	public List<Product> showcart(int custid) {
		// TODO Auto-generated method stub
		return pdao.showcart(custid);
	}

	@Override
	public Product getProduct(int pid) {
		
		return pdao.getProduct(pid);
	}

	@Override
	public int removeProductFromCart(int pid) {
		
		return pdao.removeProductFromCart(pid);
	}

}
