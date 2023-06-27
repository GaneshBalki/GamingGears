package com.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.demo.beans.User;

public class LoginDaoImpl implements LoginDao{
	private static Connection conn;
	private static PreparedStatement psgetuser;
	static {
		conn=DBUtils.getMyConnection();
		try {
			psgetuser= conn.prepareStatement("select * from User1 where username=? and password =?");
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
	}
	@Override
	public User validateUser(String username, String password) {
		try {
			psgetuser.setString(1, username);
			psgetuser.setString(2, password);
			ResultSet rs= psgetuser.executeQuery();
			if(rs.next()) {
				return new User(rs.getInt(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getInt(7));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}
}
