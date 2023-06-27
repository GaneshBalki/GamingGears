package com.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.demo.beans.User;

public class UserDaoImpl implements UserDao{
	private static Connection conn;
	private static PreparedStatement registerUser;
	static {
		conn=DBUtils.getMyConnection();
		try {
			registerUser=conn.prepareStatement("insert into user1 values(default,?,?,?,?,?,1)");
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
	}
	@Override
	public int registerUser(User u) {
		try {
			registerUser.setString(1, u.getUsername());
			registerUser.setString(2, u.getPassword());
			registerUser.setString(3, u.getEmail());
			registerUser.setString(4, u.getMobile());
			registerUser.setString(5, u.getAddr());
			int status=registerUser.executeUpdate();
			return status;
			
		} catch (SQLException e) {
		
			e.printStackTrace();
		}
		return 0;
	}

}
