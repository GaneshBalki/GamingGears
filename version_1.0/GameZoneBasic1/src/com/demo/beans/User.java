package com.demo.beans;

public class User {
	private int custid;
	private String username;
	private String password;
	private String email;
	private String mobile;
	private String addr;
	private int isActive;
	public User() {
		super();
	}
	public User(int custid, String username, String password, String email, String mobile, String addr, int isActive) {
		super();
		this.custid = custid;
		this.username = username;
		this.password = password;
		this.email = email;
		this.mobile = mobile;
		this.addr = addr;
		this.isActive = isActive;
	}
	public int getCustid() {
		return custid;
	}
	public void setCustid(int custid) {
		this.custid = custid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public int getIsActive() {
		return isActive;
	}
	public void setIsActive(int isActive) {
		this.isActive = isActive;
	}
	@Override
	public String toString() {
		return "User [custid=" + custid + ", username=" + username + ", password=" + password + ", email=" + email
				+ ", mobile=" + mobile + ", addr=" + addr + ", isActive=" + isActive + "]";
	}
	
	

}
