package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;

public interface IDistributorService {
	List<Distributor> getAllDistributors();

	Distributor verfiyDistributor(Login dislogin);

	Distributor forgetPassDistributor(String email);

	void registerDistributor(Distributor dis);
	
	
}
