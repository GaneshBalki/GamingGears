package com.demo.service;

import com.demo.beans.User;

public interface LoginService {

	User validateUser(String username, String password);

}
