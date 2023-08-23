package com.demo.gaminggears.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.Askexpert;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.service.IAskExpertService;
import com.demo.gaminggears.service.IProductService;

@CrossOrigin(origins = "*")
@RestController
public class AskExpertController {

	@Autowired
	IAskExpertService iAskExpertService;
	
	@Autowired (required = true)
	IProductService productService;
	
	@GetMapping("/get-expert-req/{expid}")
	public List<Askexpert>   displayAllProducts(@PathVariable int expid) {
		List<Askexpert> plist=iAskExpertService.getAllQueries(expid);
		return plist;
		
	}
	
	@PostMapping("/ask-expert-req/")
	public ResponseEntity<String> insertQuery( @RequestBody Askexpert q) {
		  iAskExpertService.addQuery(q);
		  return ResponseEntity.ok("added successfully");
	}
	
}
