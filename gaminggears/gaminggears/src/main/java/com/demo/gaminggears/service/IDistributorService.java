package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.DisSalesStats;
import com.demo.gaminggears.entity.Distributor;
import com.demo.gaminggears.entity.Login;

public interface IDistributorService {
	List<Distributor> getAllDistributors();

	Distributor verfiyDistributor(Login dislogin);

	void forgetPassDistributor(Login dislogin);

	void registerDistributor(Distributor dis);

	Distributor getDistributorbyID(int disid);

	List<DisSalesStats> getDisSalesStats(int disid);
	
	
}
