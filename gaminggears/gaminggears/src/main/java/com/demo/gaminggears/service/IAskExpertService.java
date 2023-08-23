package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Askexpert;

public interface IAskExpertService {

	List<Askexpert> getAllQueries(int expid);

	void addQuery(Askexpert q);

}
