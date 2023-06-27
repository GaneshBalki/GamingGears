package com.demo.service;

import com.demo.beans.User;
import com.demo.dao.LoginDao;
import com.demo.dao.LoginDaoImpl;

public class LoginServiceImpl implements LoginService{
	private LoginDao ldao;
	
	public LoginServiceImpl() {
		super();
		this.ldao = new LoginDaoImpl();
	}

	@Override
	public User validateUser(String username, String password) {
		// TODO Auto-generated method stub
		return ldao.validateUser(username,password);
	}

}
