package com.demo.gaminggears.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.gaminggears.entity.Admin;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.service.IAdminService;

@CrossOrigin(origins = "*")
@RestController
public class AdminController {
	@Autowired
	IAdminService iAdminService;
	
	@GetMapping("")
	public Admin getLogin(@RequestBody Login ln) {
		return iAdminService.getLogin(ln);
	}
}
