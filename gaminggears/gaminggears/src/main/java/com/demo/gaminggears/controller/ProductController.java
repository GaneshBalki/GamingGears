package com.demo.gaminggears.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.service.IProductService;
import com.demo.gaminggears.service.ProductService;



@CrossOrigin(origins = "*")
@RestController
public class ProductController {
	
	@Autowired (required = true)
	IProductService productService;
	
	@GetMapping("/products/home")
	public List<Product>   displayAllProducts() {
		List<Product> plist=productService.getAllProducts();
		return plist;
		
	}
	
	@GetMapping("/products")
	public List<Product>   searchProducts() {
		List<Product> plist=productService.getSearchProducts();
		return plist;
		
	}
	
	
	@PostMapping("/products")
	public ResponseEntity<String> insertProduct( @RequestBody Product p) {
		  productService.addProduct(p);
		  return ResponseEntity.ok("added successfully");
	}
	
	
	
	@DeleteMapping("/products/{pid}")
	public ResponseEntity<String> deleteProduct(@PathVariable int pid) {
		productService.deleteById(pid);
		return ResponseEntity.ok("deleted successfully");
		
	}
	@GetMapping("/products/{pid}")
	public Product getProduct(@PathVariable int pid) {
		return productService.getProductById(pid);
		
	}
	
	@GetMapping("/distributor/products/{disid}")
	public List<Product> getProductsbyDis (@PathVariable int disid){
		return productService.getProductsbyDis(disid);
	}
	
	
	@GetMapping("category-products/{catid}")
	public List<Product> getProductsByCategory(@PathVariable int catid){
		return productService.getProductsByCategory(catid);
		
	}
	
	/*
	@GetMapping("/products/{pid}")
	public ResponseEntity<Product>   getById(@PathVariable int pid) {
		Product p=productService.getById(pid);
		if(p!=null) {
		   return ResponseEntity.ok(p);
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
	}
	
	
	@PutMapping("/products/{pid}")
	public ResponseEntity<String> updateProduct(@RequestBody Product p) {
		productService.updateProduct(p);
		return ResponseEntity.ok("modified successfully");
	}
	
	@GetMapping("/products/price/{lpr}/{hpr}")
	public ResponseEntity<List<Product>> getByPrice(@PathVariable int lpr,@PathVariable int hpr) {
		List<Product> plist=productService.getByPrice(lpr,hpr);
		return ResponseEntity.ok(plist);
		
	}
	
*/
}