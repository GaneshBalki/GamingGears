package com.demo.gaminggears.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Askexpert;
import com.demo.gaminggears.repository.AskExpertRepository;

@Service
public class AskExpertService implements IAskExpertService{

	@Autowired
	AskExpertRepository askExpertRepository;
	
	@Override
	public List<Askexpert> getAllQueries(int expid) {
		// TODO Auto-generated method stub
		return askExpertRepository.getAllQueries(expid);
	}

	@Override
	public void addQuery(Askexpert q) {
		// TODO Auto-generated method stub
		askExpertRepository.save(q);
	}

}
