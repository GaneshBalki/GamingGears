package com.demo.gaminggears.service;

import java.util.List;

import com.demo.gaminggears.entity.Assembly;

public interface IAssemblyService {

	List<Assembly> getAllAssemblybyExpertId(int expid);

}
