package com.demo.gaminggears.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	
}
