package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Askexpert;
import com.demo.gaminggears.entity.AskexpertBody;

public interface IAskExpertService {

	List<Askexpert> getAllQueries(int expid);

	void addQuery(AskexpertBody q);

}
