package com.demo.gaminggears.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.repository.CustomerRepository;

@Service
public class CustomerService implements ICustomerService{

	@Autowired
	CustomerRepository customerRepository;
	
	
}
