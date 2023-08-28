package com.demo.gaminggears.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Admin;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.repository.AdminRepository;

@Service
public class AdminService implements IAdminService{

	@Autowired
	AdminRepository adminRepository;
	
	@Override
	public Admin getLogin(Login ln) {
		// TODO Auto-generated method stub
		Admin a= adminRepository.findById(ln.getEmail()).orElse(null);
		if(a.getUser().equalsIgnoreCase(ln.getEmail())&&a.getPass().equalsIgnoreCase(ln.getPass())) {
			return a;
		}
		return null;
	}

}
