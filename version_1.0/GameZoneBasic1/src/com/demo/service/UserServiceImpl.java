package com.demo.service;

import com.demo.beans.User;
import com.demo.dao.UserDao;
import com.demo.dao.UserDaoImpl;

public class UserServiceImpl implements UserService{
   UserDao uDao=new UserDaoImpl();
	@Override
	public int registerUser(User u) {
		
		return uDao.registerUser(u);
	}

}
