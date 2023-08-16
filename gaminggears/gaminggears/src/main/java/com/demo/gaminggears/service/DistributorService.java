package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;
import com.demo.gaminggears.repository.DistributorRepository;

@Service
public class DistributorService implements IDistributorService{
	@Autowired
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
	public void registerDistributor(Distributor dis) {
		// TODO Auto-generated method stub
		distributorRepository.save(dis);
	}
	public Distributor forgetPassDistributor(String disemail) {
		// TODO Auto-generated method stub
List<Distributor> dislist =distributorRepository.findAll();
		
		for(Distributor d : dislist) {
			if(d.getEmail().equalsIgnoreCase(disemail)) {
				System.out.println(d);
				return d;
			}
		}
		return null;
	}

}
