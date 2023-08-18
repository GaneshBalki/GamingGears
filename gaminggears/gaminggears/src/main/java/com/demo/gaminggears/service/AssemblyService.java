package com.demo.gaminggears.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.gaminggears.entity.Assembly;
import com.demo.gaminggears.repository.AssemblyRepository;

@Service
public class AssemblyService implements IAssemblyService{
	@Autowired
	AssemblyRepository assemblyRepository;
	@Override
	public List<Assembly> getAllAssemblybyExpertId(int expid) {
		// TODO Auto-generated method stub
		List<Assembly> assemblylists= assemblyRepository.findAll();
		List<Assembly> assemblylistbyexpert= new ArrayList<>();
		for(Assembly b : assemblylists) {
			if(b.getExpid().getExpid()==expid) {
				assemblylistbyexpert.add(b);
			}
		}
		return assemblylistbyexpert;
	}
	
	public List<Assembly> getBuildunitbyExpertId(int expid) {
		// TODO Auto-generated method stub
		return assemblyRepository.findByExpertId(expid);
	}

}
