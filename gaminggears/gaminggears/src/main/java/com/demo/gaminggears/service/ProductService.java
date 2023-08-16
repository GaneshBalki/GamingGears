package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class ProductService implements IProductService {
	@Autowired
    ProductRepository productRepository;

	@Override
	public List<Product> getAllProducts() {
		List<Product> plist= productRepository.findAll();
		
		//System.out.println(plist);
		return plist;
		
	}

	public void addProduct(Product p) {
	        productRepository.save(p);
	}

	public void deleteById(int pid) {	
		productRepository.deleteById(pid);	
	}



	
}
