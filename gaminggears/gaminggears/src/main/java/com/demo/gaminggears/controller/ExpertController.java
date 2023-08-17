package com.demo.gaminggears.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.Expert;
import com.demo.gaminggears.entity.Product;
import com.demo.gaminggears.service.ExpertService;
import com.demo.gaminggears.service.IExpertSevice;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ExpertController {
	@Autowired
	IExpertSevice iexpertService;
	
	@GetMapping("/experts")
	public List<Expert> displayAllExpert(){
		return iexpertService.getAllExperts();
			}
	
	@PostMapping("/expert/{expertid}")
	public ResponseEntity<String> insertExpert( @RequestBody Expert e) {
		  iexpertService.addExpert(e);
		  return ResponseEntity.ok("added successfully");
	}
	
	@GetMapping("/expert/{expertid}")
	public Expert getExpert (@PathVariable int expertid) {
		return iexpertService.getExpertById(expertid);
		
		
	}
	

}
