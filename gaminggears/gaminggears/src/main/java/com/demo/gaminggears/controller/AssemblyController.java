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

import com.demo.gaminggears.entity.Assembly;
import com.demo.gaminggears.entity.Expert;
import com.demo.gaminggears.service.IAssemblyService;
import com.demo.gaminggears.service.IExpertSevice;

@CrossOrigin(origins ="*")
@RestController
public class AssemblyController {
	@Autowired
	IAssemblyService iassemblyService;
	
//	@GetMapping("/assembly")
//	public List<Buildunit> displayAllAssembly(){
//		return iassemblyService.displayAllAssembly();
//			}
//	
//	@PostMapping("/assembly/{expid}")
//	public ResponseEntity<String> insert( @RequestBody Buildunit a, @PathVariable int expid) {
//		  iassemblyService.addAssemblyUnit(a);
//		  return ResponseEntity.ok("added successfully");
//	}
	
	@GetMapping("/assembly/{expid}")
	public List<Assembly> getAllAssemblybyExpertId (@PathVariable int expid) {
		return iassemblyService.getAllAssemblybyExpertId(expid);
		
		
	}
}
