package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.entity.ProductNew;
import com.demo.gaminggears.repository.NewProductRepository;
import com.demo.gaminggears.repository.ProductRepository;

@Service
public class ProductService implements IProductService {
	@Autowired
    ProductRepository productRepository;

	
	@Autowired
	NewProductRepository newproductRepository;
	@Override
	public List<Product> getAllProducts() {
		//List<Product> plist= productRepository.findAll();
		List<Product> plist= productRepository.getAllProduct();
		//System.out.println(plist);
		return plist;
		
	}
	@Override
	public List<Product> getSearchProducts() {
		//List<Product> plist= productRepository.findAll();
		List<Product> plist= productRepository.getSearchedProduct();
		//System.out.println(plist);
		return plist;
		
	}

	public void addProduct(Product p) {
	        productRepository.save(p);
	}

	public void deleteById(int pid) {	
		productRepository.deleteById(pid);	
	}

	@Override
	public Product getProductById(int pid) {
		// TODO Auto-generated method stub
		
		return productRepository.findById(pid).orElse(null);
	}

	@Override
	public List<Product> getProductsByCategory(int catid) {
		// TODO Auto-generated method stub
		return productRepository.getProductsByCategory(catid);
	}

	@Override
	public List<Product> getProductsbyDis(int disid) {
		// TODO Auto-generated method stub
		return productRepository.getProductsbyDis(disid);
	}
	@Override
	public ResponseEntity<ProductNew> addProductByDist(ProductNew product) {
	    ProductNew savedProduct = newproductRepository.save(product);

	
		return  ResponseEntity.ok(savedProduct);
	}
	@Override
	public void DeleteProduct(int proid) {
		productRepository.deleteById(proid);
		
	}




	
}
