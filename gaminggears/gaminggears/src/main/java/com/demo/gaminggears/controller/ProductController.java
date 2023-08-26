package com.demo.gaminggears.controller;

import java.io.IOException;
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
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.demo.gaminggears.entity.Brand;
import com.demo.gaminggears.entity.Category;
import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.entity.ProductNew;
import com.demo.gaminggears.service.IDistributorService;
import com.demo.gaminggears.service.IProductService;
import com.demo.gaminggears.service.ProductService;




@RestController
@CrossOrigin(origins = "*")
public class ProductController {
	
	@Autowired (required = true)
	IProductService productService;
	
	@Autowired
	IDistributorService distributorService;
	
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
	 
	
	@PostMapping("/anand")
	public ResponseEntity<ProductNew> addProduct(@RequestPart("proname") String proname,
            @RequestPart("description") String description,
            @RequestPart("price") double price,
            @RequestPart("url1") MultipartFile url1,
            @RequestPart("url2") MultipartFile url2,
            @RequestPart("url3") MultipartFile url3,
            @RequestPart("catid") int catid,
            @RequestPart("brandid") int brandid,
            @RequestPart("disid") int disid
    ) throws IOException {
		
		
		ProductNew product = new ProductNew();
		System.out.println("*****************"+proname+"*************");
        product.setProname(proname);
        product.setDescription(description);
        product.setPrice(price);
        product.setImage1(url1.getBytes());
        product.setImage2(url2.getBytes());
        product.setImage3(url3.getBytes());
        // Set the Category, Brand, and Distributor based on IDs
        
        product.setCatid(new Category(catid,"CPUcabinat")); 
        product.setBrandid(new Brand(brandid,"Zebronics"));   // Assuming you have a Brand entity
        Distributor dis=distributorService.getDistributorbyID(disid);
        product.setDisid(dis); // Assuming you have a Distributor entity

        
	    return productService.addProductByDist(product);
	}
	

}