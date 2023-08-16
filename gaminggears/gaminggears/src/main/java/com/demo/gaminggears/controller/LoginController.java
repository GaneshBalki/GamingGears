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

import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.service.LoginService;
import com.demo.gaminggears.service.ProductService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {
	
	@Autowired (required = true)
	LoginService loginService;
	
	@GetMapping("/distributors")
	public List<Distributor> getAllDistributors() {
		List<Distributor> dislist=loginService.getAllDistributors();
		return dislist;
		
	}
	@PostMapping("/dislogin")
	public Distributor dislogin(@RequestBody Login dislogin) {
		
		return loginService.verfiyDistributor(dislogin);
		
	}
	
	@PostMapping("/distributor")
	public void dislogin(@RequestBody Distributor dis) {
		
		loginService.registerDistributor(dis);
		
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
	
	@PostMapping("/products/{pid}")
	public ResponseEntity<String> insertProduct( @RequestBody Product p) {
		  productService.addProduct(p);
		  return ResponseEntity.ok("added successfully");
	}
	
	
	
	@DeleteMapping("/products/{pid}")
	public ResponseEntity<String> deleteProduct(@PathVariable int pid) {
		productService.deleteById(pid);
		return ResponseEntity.ok("deleted successfully");
		
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