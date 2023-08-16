package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.repository.DistributorRepository;

public class LoginService implements ILoginService{
	DistributorRepository distributorRepository;
	@Override
	public List<Distributor> getAllDistributors() {
		List<Distributor> dislist =distributorRepository.findAll();
		
		return dislist;
	}
	public Distributor verfiyDistributor(Login currLogin) {
		List<Distributor> dislist =distributorRepository.findAll();
		
		for(Distributor d : dislist) {
			if(d.getEmail().equalsIgnoreCase(currLogin.getEmail())&& d.getPass().equalsIgnoreCase(currLogin.getPass())) {
				return d;
			}
		}
		return null;
	}

}
